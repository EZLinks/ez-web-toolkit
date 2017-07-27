import { UiGridRequest } from '../models/uiGrid/uiGridRequest';
import { UiGridResult } from '../models/uiGrid/uiGridResult';
import { BaseComponent } from '../baseClasses/baseComponent';
import { EventConsts } from '../constants/eventConsts';

export abstract class BaseLookupController<T> extends BaseComponent {

    //#region Properties

    gridApi: any;

    gridOptions: any;

    gridColumns: any;

    filterRequest: UiGridRequest;

    allDataFetched: boolean;

    isRequestRunning: boolean;

    isRequestError: boolean;

    filterChangedTimeout: any;

    selectedItem: T;

    selectedItemIds: Array<any>;

    itemIdField: string;

    onDoubleClick: Function;

    getItems: Function;

    //#endregion

    //#region Constructor

    constructor(public $scope) {
        super($scope);

        $scope.rowDblClick = (row) => this.onDoubleClickEvent(row.entity);

        $scope.$on(EventConsts.reloadGridEvent, () => {
            this.reloadGrid();
        });
    }

    //#endregion

    //#region Functions

    abstract reloadGrid(): Promise<any>;

    /**
     * Opens the editor when an item is double clicked.
     * @param {T} selectedItem - The selected (double-clicked) item.
     */
    onDoubleClickEvent(selectedItem): void {
        this.selectedItem = selectedItem as T;
        this.onDoubleClick();
    }

    //#endregion
}
