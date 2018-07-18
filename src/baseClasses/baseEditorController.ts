/**
 * @namespace toolkit.baseClasses
 */

import * as _ from 'lodash';
import { IValidatableController, ValidationService, IValidationService, IRulesCustomizer, IValidator } from 'angular-typescript-validation';

import { ResponseError } from '../exceptions/responseError';
import { EditorState } from '../enums/editorState';

import { INotificationService } from '../services/notificationService';
import { ValidationProcessor } from '../services/validationProcessor';

export abstract class BaseEditorController<T> implements IValidatableController {

    private validationService: IValidationService;
    private isReqRunning: boolean;
    private isValidationRequestRunning: boolean;

    /**
     * Rules for validating our item with.
     * @member {IRulesCustomizer} toolkit.baseClasses.BaseEditorController#rulesCustomizer
     */
    public rulesCustomizer: IRulesCustomizer;

    /**
     * Form element. Used in validation scenario.
     * @member {any} toolkit.baseClasses.BaseEditorController#form
     */
    public form: any;

    /**
     * Item which is validated.
     * @member {T} toolkit.baseClasses.BaseEditorController#item
     */
    public item: T;

    /**
     * Obsolete. Do not use this property. Returns item.
     * @member {T} toolkit.baseClasses.BaseEditorController#model
     */
    public get model() {
        return this.item;
    }

    /**
     * The callback function to execute when the editor is closed.
     * @member {Function} toolkit.baseClasses.BaseEditorController#onClose
     */
    public onClose: Function;

    /**
     * Checks if request for validating or edit item is currently running.
     * @member {boolean} toolkit.baseClasses.BaseEditorController#isRequestRunning
     */
    public get isRequestRunning(): boolean {
        return this.isReqRunning || this.isValidationRequestRunning;
    }

    public set isRequestRunning(val: boolean) {
        this.$timeout(() => {
            this.isReqRunning = val;
        });
    }

    /**
     * The state of the editor add/edit.
     * @member {EditorState} toolkit.baseClasses.BaseEditorController#state
     */
    public state: EditorState;

    /**
     * Whether to clear item on close or not. Close occurs automatically after success submit.
     * @member {boolean} toolkit.baseClasses.BaseEditorController#clearItemOnClose
     */
    public clearItemOnClose: boolean = true;

    public showMessageOnSuccess: boolean = true;

    public successMessage: string = 'Successfully saved.';

    /**
     * @class toolkit.baseClasses.BaseEditorController<T extends Object>
     * @implements IValidatableController
     * @classdesc Provides methods for validating request before server call, the editor states.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimeoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     * @param {IValidator} validator Validator for item which should be edited.
     */
    constructor(
        $scope: any,
        public $timeout: ng.ITimeoutService,
        public notificationService: INotificationService,
        validator: IValidator
    ) {
        this.validationService = new ValidationService(this, $scope);
        this.rulesCustomizer = validator.rulesCustomizer;
        this.isRequestRunning = null;
        this.isValidationRequestRunning = false;
    }

    /**
     * Provide your promise method which calls server side to save item.
     * @abstract
     * @method toolkit.baseClasses.BaseEditorController#save
     * @return {Promise<any>}
     */
    public abstract save(): Promise<any>;

    /**
     * Closes the editor. Clears item on close by default and calls onClose callback.
     * @method toolkit.baseClasses.BaseEditorController#close
     */
    public close() {

        if (this.clearItemOnClose) {
            this.clearItem();
        }

        if (this.onClose) {
            this.onClose();
        }

    }

    /**
     * Occurs on response success. Could be overriden.
     * @method toolkit.baseClasses.BaseEditorController#onResponseSuccess
     * @param {any} response The response from the server.
     */
    protected onResponseSuccess(response: any) {
        // could be overriden
    }

    protected handleWarnResponse(response: any) {
        if (response.hasWarning) {
            this.notificationService.info(response.detail);
        } else {
            this.notificationService.success(this.successMessage);
        }
    }

    /**
     * Notifies user about success save. Could be overriden to provide different notification.
     * @method toolkit.baseClasses.BaseEditorController#successNotification
     */
    protected successNotification(): void {
        if (this.showMessageOnSuccess) {
            this.notificationService.success(this.successMessage);
        }
    }

    /**
     * Method is called after validation is occured, if false the do not call the save method.
     * @method toolkit.baseClasses.BaseEditorController#afterValidation
     * @param {boolean} validationResult The validation result.
     */
    public afterValidation(validationResult: boolean): boolean {
        return true;
    }

    /**
     * Validates an item, in case of success, makes request to server in order to save item.
     * @method toolkit.baseClasses.BaseEditorController#submit
     */
    public submit(): void {

        if (!this.item) {
            this.item = {} as T;
        }

        if (this.isValidationRequestRunning) {
            return;
        }

        this.isValidationRequestRunning = true;

        this.validationService.validate(this.item).then((result) => {

            this.$timeout(() => {
                this.isValidationRequestRunning = false;
            });

            if (!this.afterValidation(result))
            {
                return;
            }

            if (result) {

                if (!this.isReqRunning) {

                    this.isRequestRunning = true;

                    this.save()
                        .then((response: any) => {

                            this.successNotification();
                            this.onResponseSuccess(response);
                            this.close();

                        })
                        .catch((reject) => {

                            if (reject && reject.data) {
                                ValidationProcessor.processValidationServerResponse(
                                    reject.data,
                                    (fieldName: string, errorMessage: string) => this.validationService.addServerError(fieldName, errorMessage));
                            }

                        })
                        .then(() => {
                            this.isRequestRunning = false;
                        });
                }
            }
        });
    }

    /**
     * Whether editor is in add state.
     * @method toolkit.baseClasses.BaseEditorController#isInAddState
     */
    public isInAddState(): boolean {
        return this.state === EditorState.Add;
    }

    /**
     * Whether editor is in edit state.
     * @method toolkit.baseClasses.BaseEditorController#isInEditState
     */
    public isInEditState(): boolean {
        return this.state === EditorState.Edit;
    }

    /**
     * Nulls an item.
     * @method toolkit.baseClasses.BaseEditorController#clearItem
     */
    public clearItem() {
        this.item = null;
    }
}
