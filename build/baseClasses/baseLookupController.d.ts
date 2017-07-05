import { UiGridRequest } from '../models/uiGrid/uiGridRequest';
import { BaseComponent } from '../baseClasses/baseComponent';
export declare abstract class BaseLookupController<T> extends BaseComponent {
    $scope: any;
    gridApi: any;
    gridOptions: any;
    gridColumns: any;
    filterRequest: UiGridRequest;
    allDataFetched: boolean;
    isRequestRunning: boolean;
    isRequestError: boolean;
    filterChangedTimeout: any;
    selectedItem: T;
    onDoubleClick: Function;
    getItems: Function;
    constructor($scope: any);
    abstract reloadGrid(): Promise<any>;
    /**
     * Opens the editor when an item is double clicked.
     * @param {T} selectedItem - The selected (double-clicked) item.
     */
    onDoubleClickEvent(selectedItem: any): void;
}
