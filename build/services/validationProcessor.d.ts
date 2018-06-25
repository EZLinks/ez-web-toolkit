/**
 * @namespace toolkit.services
 */
/**
* @class toolkit.services.ValidationProcessor
* @classdesc Methods for porocessing our validation response.
*/
export declare class ValidationProcessor {
    /**
     * handles the validation server response.
     */
    static processValidationServerResponse(responseData: any, errorHandler: (fieldName: string, errorMessage: string) => void): void;
    /**
     * checks if response is validationResult
     */
    static isValidationResultResponse(data: any): boolean;
}
