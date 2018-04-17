/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { IValidatableController, IRulesCustomizer, IValidator } from 'angular-typescript-validation';
import { EditorState } from '../enums/editorState';
import { INotificationService } from '../services/notificationService';
export declare abstract class BaseEditorController<T> implements IValidatableController {
    $timeout: ng.ITimeoutService;
    notificationService: INotificationService;
    private validationService;
    private isReqRunning;
    private isValidationRequestRunning;
    /**
     * Rules for validating our item with.
     * @member {IRulesCustomizer} toolkit.baseClasses.BaseEditorController#rulesCustomizer
     */
    rulesCustomizer: IRulesCustomizer;
    /**
     * Form element. Used in validation scenario.
     * @member {any} toolkit.baseClasses.BaseEditorController#form
     */
    form: any;
    /**
     * Item which is validated.
     * @member {T} toolkit.baseClasses.BaseEditorController#item
     */
    item: T;
    /**
     * Obsolete. Do not use this property. Returns item.
     * @member {T} toolkit.baseClasses.BaseEditorController#model
     */
    readonly model: T;
    /**
     * The callback function to execute when the editor is closed.
     * @member {Function} toolkit.baseClasses.BaseEditorController#onClose
     */
    onClose: Function;
    /**
     * Checks if request for validating or edit item is currently running.
     * @member {boolean} toolkit.baseClasses.BaseEditorController#isRequestRunning
     */
    isRequestRunning: boolean;
    /**
     * The state of the editor add/edit.
     * @member {EditorState} toolkit.baseClasses.BaseEditorController#state
     */
    state: EditorState;
    /**
     * Whether to clear item on close or not. Close occurs automatically after success submit.
     * @member {boolean} toolkit.baseClasses.BaseEditorController#clearItemOnClose
     */
    clearItemOnClose: boolean;
    showMessageOnSuccess: boolean;
    successMessage: string;
    /**
     * @class toolkit.baseClasses.BaseEditorController<T extends Object>
     * @implements IValidatableController
     * @classdesc Provides methods for validating request before server call, the editor states.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimeoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     * @param {IValidator} validator Validator for item which should be edited.
     */
    constructor($scope: any, $timeout: ng.ITimeoutService, notificationService: INotificationService, validator: IValidator);
    /**
     * Provide your promise method which calls server side to save item.
     * @abstract
     * @method toolkit.baseClasses.BaseEditorController#save
     * @return {Promise<any>}
     */
    abstract save(): Promise<any>;
    /**
     * Closes the editor. Clears item on close by default and calls onClose callback.
     * @method toolkit.baseClasses.BaseEditorController#close
     */
    close(): void;
    /**
     * Occurs on response success. Could be overriden.
     * @method toolkit.baseClasses.BaseEditorController#onResponseSuccess
     * @param {any} response The response from the server.
     */
    protected onResponseSuccess(response: any): void;
    /**
     * Notifies user about success save. Could be overriden to provide different notification.
     * @method toolkit.baseClasses.BaseEditorController#successNotification
     */
    protected successNotification(): void;
    /**
     * Validates an item, in case of success, makes request to server in order to save item.
     * @method toolkit.baseClasses.BaseEditorController#submit
     */
    submit(): void;
    /**
     * Whether editor is in add state.
     * @method toolkit.baseClasses.BaseEditorController#isInAddState
     */
    isInAddState(): boolean;
    /**
     * Whether editor is in edit state.
     * @method toolkit.baseClasses.BaseEditorController#isInEditState
     */
    isInEditState(): boolean;
    /**
     * Nulls an item.
     * @method toolkit.baseClasses.BaseEditorController#clearItem
     */
    clearItem(): void;
}
