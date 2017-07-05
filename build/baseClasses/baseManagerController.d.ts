import { ManagerState } from '../enums/managerState';
import { EditorState } from '../enums/editorState';
import { INotificationService } from '../services/notificationService';
export declare abstract class BaseManagerController<T> {
    $scope: any;
    $timeout: any;
    notificationService: INotificationService;
    ManagerState: typeof ManagerState;
    EditorState: typeof EditorState;
    managerState: ManagerState;
    editorState: EditorState;
    selectedItem: T;
    isRequestRunning: boolean;
    /**
     * Needs to be set in a timeout so the page updates accordingly.
     */
    state: ManagerState;
    constructor($scope: any, $timeout: any, notificationService: INotificationService);
    newItem(): void;
    /**
     * Retrieve the selected item.
     */
    abstract getItem(): Promise<T>;
    /**
     * prepares new item to be passed to editor in the add state.
     */
    abstract prepareNewItem(): T;
    /**
     * Edit the selected item - retrieve the selected item then load the editor page.
     *
     * @returns {Promise<any>} - A promise to the result of retrieving the item
     * and moving to the editor page.
     */
    editItem(): Promise<any> | void;
    clearSelected(): void;
    closeEditor(): void;
}
