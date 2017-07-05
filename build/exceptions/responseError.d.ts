import { ErrorResponseType } from '../enums/errorResponseType';
/**
 * Response error exception.
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
