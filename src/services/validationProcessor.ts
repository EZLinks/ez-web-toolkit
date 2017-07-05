/**
 * validation processing tasks.
 */
export class ValidationProcessor {

    /**
     * handles the validation server response.
     */
    public static processValidationServerResponse(
        responseData: any,
        errorHandler: (fieldName: string, errorMessage: string) => void): void {

        if (!this.isValidationResultResponse(responseData)) {
            return;
        }

        for (var fieldName in responseData.errors) {

            if (responseData.errors.hasOwnProperty(fieldName)) {

                let errorMessages: Array<string> = responseData.errors[fieldName];

                for (let i: number = 0; i < errorMessages.length; i++) {
                    errorHandler(fieldName, errorMessages[i]);
                }
            }
        }
    }

    /**
     * checks if response is validationResult
     */
    public static isValidationResultResponse(data) {

        if (data && data.hasServerValidationErrors === true) {
            return true;
        }

        return false;
    }
}