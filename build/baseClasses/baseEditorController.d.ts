/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { IValidatableController, IRulesCustomizer, IValidator } from 'angular-typescript-validation';
import { EditorState } from '../enums/editorState';
import { INotificationService } from '../services/notificationService';
export declare abstract class BaseEditorController<T> implements IValidatableController {
    $timeout: ng.ITimeoutService;
    notificationService: INotificationService;
    /**
     * the validation service.
     */
    private validationService;
    /**
     * rulez of controller.
     */
    rulesCustomizer: IRulesCustomizer;
    /**
     * The form element.
     */
    form: any;
    /**
     * The one and only item
     * @binding
     */
    item: T;
    /**
     * gets the model.
     */
    readonly model: T;
    /**
     * The callback function to execute when the editor is closed.
     * @binding
     */
    onClose: Function;
    /**
     * Is a request currently running? Used to show loading animation and block
     * additional requests.
     */
    private isReqRunning;
    /**
     * Indicates if validation request is running.
     */
    private isValidationRequestRunning;
    isRequestRunning: boolean;
    /**
     * The state of the editor.
     */
    state: EditorState;
    clearItemOnClose: boolean;
    constructor($scope: any, $timeout: ng.ITimeoutService, notificationService: INotificationService, validator: IValidator);
    /**
     * Do the actual save.
     * @returns {Promise<any>} - A promise to the result of saving the item.
     */
    abstract save(): Promise<any>;
    /**
     * Close the editor.
     */
    close(): void;
    /**
     * Occurs on success response.
     */
    protected onResponseSuccess(response: any): void;
    protected successNotification(): void;
    /**
     * Submit the form, save the item. Handles loading animation, notifications
     * and validation.
     */
    submit(): void;
    /**
     * True if the editor state is in the add state.
     */
    isInAddState(): boolean;
    /**
     * True if the editor state is in the edit state.
     */
    isInEditState(): boolean;
    /**
     * Clear the item.
     */
    clearItem(): void;
}
