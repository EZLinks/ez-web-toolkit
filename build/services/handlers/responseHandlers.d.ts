import { INotificationService } from '../notificationService';
/**
 * Generic response handlers.
 */
export declare class ResponseHandlers {
    private notification;
    static $inject: string[];
    constructor(notification: INotificationService);
    /**
     * Notifies and throws a generic error message.
     *
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    error(rethrow?: boolean, hideErrorMessage?: boolean): void;
    /**
     * Handles error in response.
     *
     * makes notification with detail taken from json and throws ResponseError
     * with the type of data and data itself
     *
     * @param {any} jsonData - The json data object.
     * @param {boolean} rethrow - Whether or not to rethrow the error.
     */
    handleProblem(jsonData: any, rethrow?: boolean, hideErrorMessage?: boolean): void;
    /**
     * Checks if response is success.
     *
     * @param {HttpStatusCode} statusCode - The http status code.
     * @returns {boolean} Whether or not the status code is a success response.
     */
    private isSuccessResponse;
    /**
     * Gets response data typed from json data.
     *
     * @param {any} jsonData - The json data object.
     * @returns {ErrorResponseType} The error response type.
     */
    private getErrorResponseType;
}
export interface IResponseHandlers {
    error(rethrow: boolean, hideErrorMessage: boolean): any;
    handleProblem(jsonData: any, rethrow: boolean, hideErrorMessage: boolean): any;
}
