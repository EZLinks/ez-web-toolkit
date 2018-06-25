import { UiGridRequest } from '../models/uiGrid/uiGridRequest';
import { BaseLookupController } from '../baseClasses/baseLookupController';
export declare class UiGridService<T> implements IUiGridService<T> {
    private $timeout;
    static commonGridOptions: {
        data: any[];
        useExternalSorting: boolean;
        enableFiltering: boolean;
        useExternalFiltering: boolean;
        enableColumnMenus: boolean;
        enableFullRowSelection: boolean;
        enableRowHeaderSelection: boolean;
        multiSelect: boolean;
        noUnselect: boolean;
        rowHeight: number;
        paginationPageSize: number;
        minRowsToShow: number;
    };
    static rowTemplate: string;
    static $inject: string[];
    constructor($timeout: any);
    initScrollPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<T>): {
        columnDefs: T[];
        enableHorizontalScrollbar: number;
        enableVerticalScrollbar: number;
        onRegisterApi: (gridApi: any) => void;
        rowTemplate: string;
        enablePaginationControls: boolean;
        enablePagination: boolean;
    };
    initPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<T>): {
        useExternalPagination: boolean;
        columnDefs: T[];
        enableHorizontalScrollbar: number;
        enableVerticalScrollbar: number;
        enableRowHeaderSelection: boolean;
        onRegisterApi: (gridApi: any) => void;
        rowTemplate: string;
        enablePaginationControls: boolean;
        enablePagination: boolean;
        paginationPageSizes: number[];
    };
    initFilterRequest(gridOptions: any): UiGridRequest;
    doSearch(controller: BaseLookupController<T>, isScrollPaging?: boolean): Promise<any> | void;
    destroyGrid(controller: BaseLookupController<T>): void;
    private handleUiGridCallbacks(gridApi, controller, callback);
    selectAllItems: (controller: BaseLookupController<T>) => void;
    unselectAllItems: (controller: BaseLookupController<T>) => void;
    private constructFilters(columns);
    private gridFilterChanged(controller, isScrollPaging, callback);
    /**
     * Resize the grid according to the number of rows retrieved from the data
     * source. If the number of rows is less than the page size, resize the grid
     * to fit that number of rows.
     *
     * If there are no items to display, resize the grid to allow for the display
     * of an error message inside the grid.
     *
     * @param  {BaseLookupController<T>} controller - The controller.
     */
    private resizeGrid(controller);
}
/**
* @interface
* @class toolkit.services.IUiGridService
* @classdesc Methods to work with angular ui grid. Search, initialization of options, item selects.
*/
export interface IUiGridService<T> {
    /**
     * inits grid options for scroll paging grid.
     * @method toolkit.services.IUiGridService#initScrollPagedGridOptions
     */
    initScrollPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<any>): any;
    /**
     * inits grid options for non-scrolling paging grid.
     * @method toolkit.services.IUiGridService#initPagedGridOptions
     */
    initPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<any>): any;
    /**
     * inits filter request object for ui-grid
     * @method toolkit.services.IUiGridService#initFilterRequest
     * @param {Object} gridOptions - grid options object
     * @returns {Object} filter request Obj
     */
    initFilterRequest(gridOptions: any): UiGridRequest;
    /**
     * makes a call to api to get the data.
     * @method toolkit.services.IUiGridService#doSearch
     */
    doSearch(controller: BaseLookupController<T>, isScrollPaging: boolean): Promise<any> | void;
    /**
     * destroys grid variables linked to controller.
     * @method toolkit.services.IUiGridService#destroyGrid
     */
    destroyGrid(controller: BaseLookupController<T>): void;
    /**
     * Selects all the items that can appear on the grid regardless of filter.
     * @method toolkit.services.IUiGridService#selectAllItems
     * @param {BaseLookupController<T>} controller
     */
    selectAllItems(controller: BaseLookupController<T>): void;
    /**
     * Unselects all the items that can appear on the grid regardless of filter.
     * @method toolkit.services.IUiGridService#unselectAllItems
     * @param {BaseLookupController<T>} controller
     */
    unselectAllItems(controller: BaseLookupController<T>): void;
}
