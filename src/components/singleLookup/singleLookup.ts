/**
 * @namespace toolkit.components
 */

import * as _ from 'lodash';

import { BaseComponent } from '../../baseClasses/baseComponent';
import { UiGridRequest } from '../../models/uiGrid/uiGridRequest';

import { INotificationService } from '../../services/notificationService';
import { TypeConsts } from '../../constants/typeConsts';

export class SingleLookup implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./singleLookup.html');
        this.controller = SingleLookupController;
        this.controllerAs = 'sl';
        this.bindings = {

            // The function to request lookup data, passed with 'request' as a parameter
            getData: '&getData',

            // The function to get the initial item by ID
            getSingle: '&getSingle',

            // The columns to display in the grid in the format
            // [{ displayName: 'Last Name', name: 'lastName', width: '30%'}]
            gridColumns: '<gridColumns',

            // If true, the button to clear the lookup is hidden.
            isRequired: '<?isRequired',

            // The html template to display in the textbox
            // example: name + ' - ' + number
            itemTemplate: '@itemTemplate',

            // The callback function that returns the selected items id, passed with 'result' as a parameter
            // (result will be the id of the selected item)
            resultCallback: '&resultCallback',
            
            // occurs before popup is being opened
            beforePopupOpen: '&beforePopupOpen',

            // The id to use as the current selected item
            selectedId: '<selectedId',

            // The title for the lookup window
            title: '@title',

            // The input placeholder text
            placeholder: '@placeholder',

            // The name of the property on the item that contains the unique
            //  identifier (probably 'id')
            itemIdField: '<?itemIdField'
        };
    }
}

/**
 * @class toolkit.components.SingleLookupController
 * @classdesc A single lookup component.
 */
export class SingleLookupController extends BaseComponent {

    public getData: (request) => Promise<any>;
    public getSingle: (id) => Promise<any>;

    public itemTemplate: string;
    public itemDisplay: string;
    public selectedId: string;
    public selectedItem: any;
    public title: string;
    public placeholder: string;

    public isRequired: boolean;
    public isDataLoading: boolean;

    public gridColumns: any;
    public originalItem: any;

    public isModalVisible: boolean;

    public resultCallback: Function;
    public beforePopupOpen: Function;

    public commonGridColumnOptions = {
        enableFiltering: true,
        filter: {
            condition: this.uiGridConstants.filter.STARTS_WITH,
            placeholder: 'starts with',
            disableCancelFilterButton: true
        },
        filterHeaderTemplate: this.customUiGridConstants.filterHeaderTemplate,
        headerCellTemplate: this.customUiGridConstants.headerCellTemplate,
        sort: { direction: 'asc' }
    };

    static $inject = [
        '$scope',
        '$timeout',
        'notificationService',
        'customUiGridConstants',
        'uiGridConstants'
    ];

    constructor(
        public $scope,
        private $timeout: ng.ITimeoutService,
        private notificationService: INotificationService,
        private customUiGridConstants,
        private uiGridConstants
    ) {
        super($scope);
        this.isModalVisible = false;

        this.unwatchArray.push(this.$scope.$watch(() => this.selectedId, this.selectedIdChanged));
    }

    /**
     * Initialization function to get everything setup.
     */
    $onInit() {
        // Merge the columns passed in with the common properties
        _.forEach(this.gridColumns, (col) => {
            // Use cloneDeep to prevent the same filter being used multiple times.
            let c = Object.assign({}, _.cloneDeep(this.commonGridColumnOptions), col);
            Object.assign(col, c);
        });

        // Find the item to display if the id is given
        this.refreshSelectedId();
    }

    /**
     * Clears the selected item.
     */
    clearItem() {
        this.itemDisplay = '';
        this.selectedId = TypeConsts.emptyGuid;
        this.selectedItem = null;
        this.originalItem = null;

        this.resultCallback({ result: { id: TypeConsts.emptyGuid } });
    }

    /**
     * Gets all the items filtered, sorted and paged.
     */
    getItems(request: UiGridRequest) {
        return this.getData({ request: request });
    }

    /**
     * The function called when the user clicks the ok button.
     * Return false to keep the window open.
     */
    onApprove = (): boolean|void => {
        if (!this.selectedItem) {
            this.notificationService.error('Please make a selection.');
            return false;
        }

        this.updateItemDisplay();
        this.isModalVisible = false;
    }

    /**
     * The function called when the user clicks the cancel button.
     */
    onDeny = () => {
        this.selectedItem = _.cloneDeep(this.originalItem);
    }

    /**
     * Opens the editor when an item is double clicked.
     */
    onDoubleClickEvent(): void {
        this.updateItemDisplay();
        this.isModalVisible = false;
    }

    /**
     * The function called when the modal window is done closing.
     */
    onHidden = () => {
        this.resultCallback({ result: this.selectedItem ? this.selectedItem : { id: TypeConsts.emptyGuid } });
        this.originalItem = null;
    }

    /**
     * Function to open the modal window.
     */
    openModal() {

        if (this.beforePopupOpen) {

            let result = this.beforePopupOpen();
            if (result === false) {
                return;
            }
        }

        this.isModalVisible = true;

        if (this.selectedItem) {
            this.originalItem = _.cloneDeep(this.selectedItem);
        }
    }

    /**
     * Function to refresh the currently selected item
     */
    private refreshSelectedId() {
        if (this.selectedId && this.selectedId !== TypeConsts.emptyGuid) {
            this.isDataLoading = true;
            this.getSingle({ id: this.selectedId })
                .then((result) => {
                    this.$timeout(() => {
                        this.selectedItem = result;
                        this.updateItemDisplay();
                    });
                }).catch(() => {
                    // nothing to do
                }).then(() => {
                    this.$timeout(() => {
                        this.isDataLoading = false;
                    });
                });
        } else {
            this.itemDisplay = '';
            this.selectedItem = null;
            this.originalItem = null;
        }
    }

    private updateItemDisplay() {
        this.itemDisplay = this.$scope.$eval(this.itemTemplate, this.selectedItem);
    }

    /**
     * Watch function to check if the selected id has changed
     */
    selectedIdChanged = (newValue: string, oldValue: string) => {
        // Check if the value that has been changed is equal to the currently selected item's id, if they
        // are the same we do not need to do the refresh. The id's would not match if you are re-using a component
        // for multiple purposes and need to refresh the display on the lookup.
        if (newValue !== oldValue && (this.selectedItem === null || this.selectedItem.id !== newValue)) {
            this.refreshSelectedId();
        }
    }

    public getLoadingClass() {

        if (this.isDataLoading) {
            return 'loading';
        }

        return '';
    }
}