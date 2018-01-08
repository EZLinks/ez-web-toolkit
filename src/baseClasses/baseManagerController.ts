/**
 * @namespace toolkit.baseClasses
 */

import { ManagerState } from '../enums/managerState';
import { EditorState } from '../enums/editorState';

import { INotificationService } from '../services/notificationService';

export abstract class BaseManagerController<T> {

    ManagerState = ManagerState;
    EditorState = EditorState;

    /**
     * State of the manager editor or lookup.
     * @member {ManagerState} toolkit.baseClasses.BaseManagerController#managerState
     */
    public managerState: ManagerState;

    /**
     * State of the editor add/edit.
     * @member {EditorState} toolkit.baseClasses.BaseManagerController#editorState
     */
    public editorState: EditorState;

    /**
     * The selected item in grid.
     * @member {T} toolkit.baseClasses.BaseManagerController#selectedItem
     */
    public selectedItem: T;

    /**
     * Whether any request is running.
     * @member {boolean} toolkit.baseClasses.BaseManagerController#isRequestRunning
     */
    public isRequestRunning: boolean;

    get state(): ManagerState {
        return this.managerState;
    }

    /**
     * Needs to be set in a timeout so the page updates accordingly.
     */
    set state(val: ManagerState) {
        this.$timeout(() => {
            this.managerState = val;
        });
    }

    /**
     * @class toolkit.baseClasses.BaseManagerController<T extends Object>
     * @abstract
     * @classdesc Methods for manager page where user can delete/create/edit items from grid.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {ng.ITimoutService} $timeout Angular timeout.
     * @param {INotificationService} notificationService Ez notification service.
     */
    constructor(
        public $scope,
        public $timeout,
        public notificationService: INotificationService
    ) {
        this.clearSelected();
        this.state = ManagerState.Lookup;
    }

    /**
     * Switches to add editor state and editor manager state.
     * @method toolkit.baseClasses.BaseManagerController#newItem
     */
    newItem() {
        this.selectedItem = this.prepareNewItem();
        this.editorState = EditorState.Add;
        this.state = ManagerState.Editor;
    }

    /**
     * Request to sever call to get an item.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerController#getItem
     */
    public abstract getItem(): Promise<T>;

    /**
     * Prepares new item to use it in the add editor.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerController#prepareNewItem
     */
    public abstract prepareNewItem(): T;

    /**
     * Edit the selected item - retrieve the selected item then load the editor page.
     * @method toolkit.baseClasses.BaseManagerController#editItem
     * @returns {Promise<any>} A promise to the result of retrieving the item
     * and moving to the editor page.
     */
    editItem(): Promise<any>|void {
        if (!this.isRequestRunning
            && this.selectedItem !== null) {
            this.isRequestRunning = true;

            return this.getItem()
                .then(resp => {
                    this.selectedItem = resp;
                    this.editorState = EditorState.Edit;
                    this.state = ManagerState.Editor;
                })
                .catch(() => {
                    // Do nothing, error was already notified in apiService
                })
                .then(() => {
                    this.$timeout(() => {
                        this.isRequestRunning = false;
                    });
                });

        }
    }

    /**
     * Clears the selected item.
     * @method toolkit.baseClasses.BaseManagerController#clearSelected
     */
    clearSelected() {
        this.selectedItem = null;
    }

    /**
     * Callback executes when add/edit editor is closing.
     * @method toolkit.baseClasses.BaseManagerController#closeEditor
     */
    closeEditor() {
        this.clearSelected();
        this.state = ManagerState.Lookup;
    }
}
