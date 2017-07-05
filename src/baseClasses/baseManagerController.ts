import { ManagerState } from '../enums/managerState';
import { EditorState } from '../enums/editorState';

import { INotificationService } from '../services/notificationService';

export abstract class BaseManagerController<T> {

    ManagerState = ManagerState;
    EditorState = EditorState;

    public managerState: ManagerState;
    public editorState: EditorState;
    public selectedItem: T;
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

    constructor(
        public $scope,
        public $timeout,
        public notificationService: INotificationService
    ) {
        this.clearSelected();
        this.state = ManagerState.Lookup;
    }

    /*
    * Opens editor to create a new code certificate.
    */
    newItem() {
        this.selectedItem = this.prepareNewItem();
        this.editorState = EditorState.Add;
        this.state = ManagerState.Editor;
    }

    /**
     * Retrieve the selected item.
     */
    public abstract getItem(): Promise<T>;

    /**
     * prepares new item to be passed to editor in the add state.
     */
    public abstract prepareNewItem(): T;

    /**
     * Edit the selected item - retrieve the selected item then load the editor page.
     *
     * @returns {Promise<any>} - A promise to the result of retrieving the item
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

    /*
    * Clears selected certificate code id and object.
    */
    clearSelected() {
        this.selectedItem = null;
    }

    /*
    * Callback executes when add/edit editor is closing.
    */
    closeEditor() {
        this.clearSelected();
        this.state = ManagerState.Lookup;
    }
}
