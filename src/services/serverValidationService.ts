
import * as angular from 'angular';

export class ServerValidationService {

	private errs = {};

	get errors(): any {
		return this.errs;
	}

	clearErrorsForKey(formName, key) {
		if (this.hasErrorsForKey(formName, key)) {
			delete this.errs[formName][key];
		}
	}

	clearAllFormErrors(formName) {
		this.errs[formName] = {};
	}

	hasErrorsForKey(formName, key) {
		return !!this.errs[formName]
			&& !!this.errs[formName][key]
			&& !!this.errs[formName][key].length;
	}

	hasErrorsForForm(formName) {
		return !!this.errs[formName]
			&& !!Object.keys(this.errs[formName]).length;
	}

	getErrorsForKey(formName, key) {

		if (this.hasErrorsForKey(formName, key)) {
			return this.errs[formName][key];
		}

		return [];
	}

	getAllFormErrors(formName): Array<any> {

		if (this.hasErrorsForForm(formName)) {

			var allErrs = [];
			var self = this;
			Object.keys(this.errs[formName]).forEach(function (key) {
				if (angular.isArray(self.errs[formName][key])) {
					for (var i = 0; i < self.errs[formName][key].length; i++) {
						allErrs.push(self.errs[formName][key][i]);
					}
				}
			});

			return allErrs;
		}

		return [];

	}

	validate(formName, respData) {

		this.clearAllFormErrors(formName);
		if (respData.hasServerValidationErrors === true) {

			this.errs[formName] = respData.errors;
		}

	}
}

export interface IServerValidationService {

	/**
	 * Clear any existing errors for the specified form and key (element).
	 *
	 * @param  {string} formName - The form name.
	 * @param  {string} key - The key of the element for which to clear errors.
	 */
	clearErrorsForKey(formName, key);

	/**
	 * Clear all errors for the specified form.
	 *
	 * @param  {string} formName - The form name.
	 */
	clearAllFormErrors(formName);

	/**
	 * Are there errors for the specified form and key (element)?
	 *
	 * @param  {string} formName - The form name.
	 * @param  {string} key - The key of the element to check for errors.
	 * @returns {boolean} - Are there errors for the specified form and key (element)?
	 */
	hasErrorsForKey(formName, key);

	/**
	 * Are there errors for the specified form?
	 *
	 * @param  {string} formName - The form name.
	 * @returns {boolean} - Are there errors for the specified form?
	 */
	hasErrorsForForm(formName);

	/**
	 * Retrieve the errors for the specified form and key (element).
	 *
	 * @param  {string} formName - the form name.
	 * @param  {string} key - The key of the element for which to retrieve errors.
	 * @returns {Array<any>} - The errors for the specified form and key (element).
	 */
	getErrorsForKey(formName, key);

	/**
	 * Retrieve all errors for the specified form.
	 *
	 * @param  {string} formName - The form name.
	 * @returns {Array<any>} - All errors for the specified form.
	 */
	getAllFormErrors(formName);

	/**
	 * Clear the specified form of existing errors and update with the errors
	 * in the response data.
	 *
	 * @param  {string} formName - The form name.
	 * @param  {any} respData - The http response data.
	 */
	validate(formName, respData);
}
