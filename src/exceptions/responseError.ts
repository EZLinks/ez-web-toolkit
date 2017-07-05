
import {ErrorResponseType} from '../enums/errorResponseType';

/**
 * Response error exception.
 */
export class ResponseError extends Error {

    /**
     * Creates a new response error.
     * @param message
     * @param data
     */
    constructor(public type: ErrorResponseType, message: string, public data?: any) {
        super(message);
    }
}
