/**
 * @namespace toolkit.baseClasses
 */
import { ManagerState } from '../enums/managerState';
import { EditorState } from '../enums/editorState';
import { INotificationService } from '../services/notificationService';
export declare abstract class BaseManagerController<T> {
    $scope: any;
    $timeout: any;
    notificationService: INotificationService;
    ManagerState: typeof ManagerState;
    EditorState: typeof EditorState;
    /**
     * State of the manager editor or lookup.
     * @member {ManagerState} toolkit.baseClasses.BaseManagerController#managerState
     */
    managerState: ManagerState;
    /**
     * State of the editor add/edit.
     * @member {EditorState} toolkit.baseClasses.BaseManagerController#editorState
     */
    editorState: EditorState;
    /**
     * The selected item in grid.
     * @member {T} toolkit.baseClasses.BaseManagerController#selectedItem
     */
    selectedItem: T;
    /**
     * Whether any request is running.
     * @member {boolean} toolkit.baseClasses.BaseManagerController#isRequestRunning
     */
    isRequestRunning: boolean;
    /**
    * Needs to be set in a timeout so the page updates accordingly.
    */
    state: ManagerState;
    /**
     * @class toolkit.baseClasses.BaseManagerController<T extends Object>
     * @abstract
     * @classdesc Methods for manager page where user can delete/create/edit items from grid.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     */
    constructor($scope: any, $timeout: any, notificationService: INotificationService);
    /**
     * Switches to add editor state and editor manager state.
     * @method toolkit.baseClasses.BaseManagerController#newItem
     */
    newItem(): void;
    /**
     * Request to sever call to get an item.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerController#getItem
     */
    abstract getItem(): Promise<T>;
    /**
     * Prepares new item to use it in the add editor.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerController#prepareNewItem
     */
    abstract prepareNewItem(): T;
    /**
     * Edit the selected item - retrieve the selected item then load the editor page.
     * @method toolkit.baseClasses.BaseManagerController#editItem
     * @returns {Promise<any>} A promise to the result of retrieving the item
     * and moving to the editor page.
     */
    editItem(): Promise<any> | void;
    /**
     * Clears the selected item.
     * @method toolkit.baseClasses.BaseManagerController#clearSelected
     */
    clearSelected(): void;
    /**
     * Callback executes when add/edit editor is closing.
     * @method toolkit.baseClasses.BaseManagerController#closeEditor
     */
    closeEditor(): void;
}
