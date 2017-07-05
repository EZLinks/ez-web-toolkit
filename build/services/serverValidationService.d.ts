export declare class ServerValidationService {
    private errs;
    readonly errors: any;
    clearErrorsForKey(formName: any, key: any): void;
    clearAllFormErrors(formName: any): void;
    hasErrorsForKey(formName: any, key: any): boolean;
    hasErrorsForForm(formName: any): boolean;
    getErrorsForKey(formName: any, key: any): any;
    getAllFormErrors(formName: any): Array<any>;
    validate(formName: any, respData: any): void;
}
export interface IServerValidationService {
    /**
     * Clear any existing errors for the specified form and key (element).
     *
     * @param  {string} formName - The form name.
     * @param  {string} key - The key of the element for which to clear errors.
     */
    clearErrorsForKey(formName: any, key: any): any;
    /**
     * Clear all errors for the specified form.
     *
     * @param  {string} formName - The form name.
     */
    clearAllFormErrors(formName: any): any;
    /**
     * Are there errors for the specified form and key (element)?
     *
     * @param  {string} formName - The form name.
     * @param  {string} key - The key of the element to check for errors.
     * @returns {boolean} - Are there errors for the specified form and key (element)?
     */
    hasErrorsForKey(formName: any, key: any): any;
    /**
     * Are there errors for the specified form?
     *
     * @param  {string} formName - The form name.
     * @returns {boolean} - Are there errors for the specified form?
     */
    hasErrorsForForm(formName: any): any;
    /**
     * Retrieve the errors for the specified form and key (element).
     *
     * @param  {string} formName - the form name.
     * @param  {string} key - The key of the element for which to retrieve errors.
     * @returns {Array<any>} - The errors for the specified form and key (element).
     */
    getErrorsForKey(formName: any, key: any): any;
    /**
     * Retrieve all errors for the specified form.
     *
     * @param  {string} formName - The form name.
     * @returns {Array<any>} - All errors for the specified form.
     */
    getAllFormErrors(formName: any): any;
    /**
     * Clear the specified form of existing errors and update with the errors
     * in the response data.
     *
     * @param  {string} formName - The form name.
     * @param  {any} respData - The http response data.
     */
    validate(formName: any, respData: any): any;
}
