/**
 * @namespace toolkit.exceptions
 */
import { ErrorResponseType } from '../enums/errorResponseType';
/**
* @class toolkit.exceptions.ResponseError
* @classdesc Occurs on response error.
*/
export declare class ResponseError extends Error {
    type: ErrorResponseType;
    data: any;
    /**
     * Creates a new response error.
     * @param message
     * @param data
     */
    constructor(type: ErrorResponseType, message: string, data?: any);
}
