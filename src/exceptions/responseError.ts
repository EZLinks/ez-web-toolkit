/**
 * @namespace toolkit.exceptions
 */
 
import {ErrorResponseType} from '../enums/errorResponseType';

 /**
 * @class toolkit.exceptions.ResponseError
 * @classdesc Occurs on response error.
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
