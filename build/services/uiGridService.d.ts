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
 * uigrid service.
 */
export interface IUiGridService<T> {
    /**
     * inits grid options for scroll paging grid.
     */
    initScrollPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<any>): any;
    /**
     * inits grid options for non-scrolling paging grid.
     */
    initPagedGridOptions(controller: BaseLookupController<T>, columnDefs: Array<any>): any;
    /**
     * inits filter request object for ui-grid
     * @param {Object} gridOptions - grid options object
     * @returns {Object} filter request Obj
     */
    initFilterRequest(gridOptions: any): UiGridRequest;
    /**
     * makes a call to api to get the data.
     */
    doSearch(controller: BaseLookupController<T>, isScrollPaging: boolean): Promise<any> | void;
    /**
     * destroys grid variables linked to controller.
     */
    destroyGrid(controller: BaseLookupController<T>): void;
}
