/**
 * @namespace toolkit.baseClasses
 */
import { UiGridRequest } from '../models/uiGrid/uiGridRequest';
import { BaseComponent } from '../baseClasses/baseComponent';
export declare abstract class BaseLookupController<T> extends BaseComponent {
    $scope: any;
    /**
     * Ng-grid api.
     * @member {any} toolkit.baseClasses.BaseLookupController#gridApi
     */
    gridApi: any;
    /**
     * Ng-grid options.
     * @member {any} toolkit.baseClasses.BaseLookupController#gridOptions
     */
    gridOptions: any;
    /**
     * Ng-grid columns.
     * @member {any} toolkit.baseClasses.BaseLookupController#gridColumns
     */
    gridColumns: any;
    /**
     * The filter request which would be sent to server.
     * @member {UiGridRequest} toolkit.baseClasses.BaseLookupController#filterRequest
     */
    filterRequest: UiGridRequest;
    /**
     * Whether all data has been fetched and no request should be made to server any more.
     * @member {boolean} toolkit.baseClasses.BaseLookupController#allDataFetched
     */
    allDataFetched: boolean;
    /**
     * Whether request to server is running to fill the grid with items.
     * @member {boolean} toolkit.baseClasses.BaseLookupController#isRequestRunning
     */
    isRequestRunning: boolean;
    /**
     * Whether request failed on the server.
     * @member {boolean} toolkit.baseClasses.BaseLookupController#isRequestError
     */
    isRequestError: boolean;
    /**
     * The timeout for changing the filters.
     * @member {any} toolkit.baseClasses.BaseLookupController#filterChangedTimeout
     */
    filterChangedTimeout: any;
    /**
     * The currently selected item in grid.
     * @member {T} toolkit.baseClasses.BaseLookupController#selectedItem
     */
    selectedItem: T;
    /**
     * The currently selected item ids grid.
     * @member {Array<any>} toolkit.baseClasses.BaseLookupController#selectedItemIds
     */
    selectedItemIds: Array<any>;
    /**
     * The id field of an item which is fetched from the server.
     * @member {Array<any>} toolkit.baseClasses.BaseLookupController#itemIdField
     */
    itemIdField: string;
    /**
     * The id field of an item which is fetched from the server.
     * @member {Function} toolkit.baseClasses.BaseLookupController#onDoubleClick
     */
    onDoubleClick: Function;
    /**
     * Th callback for fetching items from the server.
     * @member {Function} toolkit.baseClasses.BaseLookupController#getItems
     */
    getItems: Function;
    /**
     * @class toolkit.baseClasses.BaseLookupController<T extends Object>
     * @extends BaseComponent
     * @abstract
     * @classdesc Methods for handling an angular ng-grid component.
     * @param {ng.IScope} $scope Scope of the component.
     */
    constructor($scope: any);
    /**
     * Reloads the grid, makes a server side request to fetch items once again.
     * @abstract
     * @method toolkit.baseClasses.BaseLookupController#reloadGrid
     */
    abstract reloadGrid(): Promise<any>;
    /**
     * Calls an onDoubleClick callback and assigns the selected item.
     * @method toolkit.baseClasses.BaseLookupController#onDoubleClickEvent
     */
    onDoubleClickEvent(selectedItem: any): void;
}
