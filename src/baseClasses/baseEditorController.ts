import * as _ from 'lodash';
import { IValidatableController, ValidationService, IValidationService, IRulesCustomizer, IValidator } from 'angular-typescript-validation';

import { ResponseError } from '../exceptions/responseError';
import { EditorState } from '../enums/editorState';

import { INotificationService } from '../services/notificationService';
import { ValidationProcessor } from '../services/validationProcessor';

export abstract class BaseEditorController<T> implements IValidatableController {

    /**
     * the validation service.
     */
    private validationService: IValidationService;

    /**
     * rulez of controller.
     */
    public rulesCustomizer: IRulesCustomizer;

    /**
     * The form element.
     */
    public form: any;

    /**
     * The one and only item
     * @binding
     */
    public item: T;

    /**
     * gets the model.
     */
    public get model() {
        return this.item;
    }

    /**
     * The callback function to execute when the editor is closed.
     * @binding
     */
    public onClose: Function;

    /**
     * Is a request currently running? Used to show loading animation and block
     * additional requests.
     */
    private isReqRunning: boolean;

    /**
     * Indicates if validation request is running.
     */
    private isValidationRequestRunning: boolean;

    public get isRequestRunning(): boolean {
        return this.isReqRunning || this.isValidationRequestRunning;
    }

    public set isRequestRunning(val: boolean) {
        this.$timeout(() => {
            this.isReqRunning = val;
        });
    }

    /**
     * The state of the editor.
     */
    public state: EditorState;

    public clearItemOnClose: boolean = true;

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
     * Do the actual save.
     * @returns {Promise<any>} - A promise to the result of saving the item.
     */
    public abstract save(): Promise<any>;

    /**
     * Close the editor.
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
     * Occurs on success response.
     */
    protected onResponseSuccess(response: any) {
        // could be overriden
    }

    protected successNotification(): void {
        this.notificationService.success('Successfully saved.');
    }

    /**
     * Submit the form, save the item. Handles loading animation, notifications
     * and validation.
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

            if (result) {

                if (!this.isRequestRunning) {

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
     * True if the editor state is in the add state.
     */
    public isInAddState(): boolean {
        return this.state === EditorState.Add;
    }

    /**
     * True if the editor state is in the edit state.
     */
    public isInEditState(): boolean {
        return this.state === EditorState.Edit;
    }

    /**
     * Clear the item.
     */
    public clearItem() {
        this.item = null;
    }
}
