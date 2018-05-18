
import { ErrorResponseType } from '../../enums/errorResponseType';
import { HttpStatusCode } from '../../enums/httpStatusCode';
import { ResponseError } from '../../exceptions/responseError';
import { INotificationService } from '../notificationService';

const successStatusCodes = [
    HttpStatusCode.OK,
    HttpStatusCode.Created,
    HttpStatusCode.NoContent
];

/**
 * Generic response handlers.
 */
export class ResponseHandlers {
    static $inject = [
        'notificationService'
    ];

    constructor(private notification: INotificationService) {
    }

    /**
     * Notifies and throws a generic error message.
     *
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    public error(rethrow: boolean = true, hideErrorMessage: boolean = false) {
        
        const message = 'An error occurred.';
        if (!hideErrorMessage) {
            this.notification.error(message);
        }

        if (rethrow) {
            throw new ResponseError(ErrorResponseType.ConnectionLost, message);
        }
    }

    /**
     * Handles error in response.
     *
     * makes notification with detail taken from json and throws ResponseError
     * with the type of data and data itself
     *
     * @param {any} jsonData - The json data object.
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    public handleProblem(jsonData: any, rethrow: boolean = true, hideErrorMessage: boolean = false) {

        const message = jsonData.detail as string;

        if (message) {
            if (!hideErrorMessage) {
                this.notification.error(message);
            }
        }
        else {
            this.error(rethrow, hideErrorMessage);
        }

        const errorResponseType = this.getErrorResponseType(jsonData);

        if (rethrow) {
            throw new ResponseError(errorResponseType, message, jsonData);
        }
    }

    /**
     * Checks if response is success.
     *
     * @param {HttpStatusCode} statusCode - The http status code.
     * @returns {boolean} Whether or not the status code is a success response.
     */
    private isSuccessResponse(statusCode: HttpStatusCode): boolean {
        return successStatusCodes.includes(statusCode);
    }

    /**
     * Gets response data typed from json data.
     *
     * @param {any} jsonData - The json data object.
     * @returns {ErrorResponseType} The error response type.
     */
    private getErrorResponseType(jsonData: any): ErrorResponseType {
        if (jsonData.detail) {
            if (jsonData.hasServerValidationErrors) {
                return ErrorResponseType.ValidationProblemResult;
            }
            return ErrorResponseType.ProblemResult;
        }
        return ErrorResponseType.ConnectionLost;
    }
}

export interface IResponseHandlers {
    error(rethrow: boolean, hideErrorMessage: boolean);
    handleProblem(jsonData: any, rethrow: boolean, hideErrorMessage: boolean);
}
