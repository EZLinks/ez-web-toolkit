/**
 * @namespace toolkit.components
 */

import { BaseLookupController } from '../../baseClasses/baseLookupController';
import { IUiGridService } from '../../services/uiGridService';

export class EzGrid implements ng.IComponentOptions {

    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./ezGrid.html');
        this.controller = EzGridController;
        this.controllerAs = 'eg';
        this.bindings = {

            // The grid column definitions.
            gridColumns: '=egGridColumns',

            // The selected item - corresponds with the selected row on the grid.
            selectedItem: '=egSelectedItem',

            /**
             * Retrieve the items to display in the grid.
             * @param {UiGridRequest} request - The ui grid request containing
             *  the sorting, filtering and paging information.
             * @returns {UiGridResult<T>} - The ui grid result containing the
             *  retrieved items and count of total items.
             */
            getItems: '&egGetItems',

            /**
             * Executed when a grid item is double-clicked. The selected item is
             * set before this callback function is executed.
             */
            onDoubleClick: '&egOnDoubleClick',

            /**
             * The name of the model's id field.
             *
             * @type {string}
             */
            itemIdField: '=egItemIdField'

        };
    }
}

/**
 * @class toolkit.components.EzGridController
 * @classdesc A grid component.
 */
export class EzGridController extends BaseLookupController<any> {

    //#region Constructor

    static $inject = [
        '$scope',
        'uiGridService'
    ];

    constructor(
        $scope,
        private uiGridService: IUiGridService<any>
    ) {
        super($scope);
    }

    //#endregion

    //#region onInit

    $onInit() {
        this.gridOptions = this.uiGridService.initPagedGridOptions(this, this.gridColumns);
        this.filterRequest = this.uiGridService.initFilterRequest(this.gridOptions);

        this.reloadGrid();

        this.unwatchArray.push(() => this.uiGridService.destroyGrid(this));
    }

    //#endregion

    //#region Functions

    reloadGrid() {
        return this.uiGridService.doSearch(this, false);
    }

    /**
     * Is the grid actually empty? Ensure there is no request currently running
     * and that the grid data is empty.
     */
    hasNoItems(): boolean {
        return !this.isRequestError
            && !this.isRequestRunning
            && this.gridOptions
            && this.gridOptions.data
            && this.gridOptions.data.length === 0;
    }

    //#endregion
}
