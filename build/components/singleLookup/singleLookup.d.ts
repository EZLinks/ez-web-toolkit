/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { BaseComponent } from '../../baseClasses/baseComponent';
import { UiGridRequest } from '../../models/uiGrid/uiGridRequest';
import { INotificationService } from '../../services/notificationService';
export declare class SingleLookup implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    transclude: {};
    constructor();
}
/**
 * @class toolkit.components.SingleLookupController
 * @classdesc A single lookup component.
 */
export declare class SingleLookupController extends BaseComponent {
    $scope: any;
    private $timeout;
    private notificationService;
    private customUiGridConstants;
    private uiGridConstants;
    getData: (request) => Promise<any>;
    getSingle: (id) => Promise<any>;
    itemTemplate: string;
    itemDisplay: string;
    selectedId: string;
    selectedItem: any;
    title: string;
    placeholder: string;
    isRequired: boolean;
    isDataLoading: boolean;
    gridColumns: any;
    originalItem: any;
    isModalVisible: boolean;
    useTranscludeModal: boolean;
    closeLast: boolean;
    resultCallback: Function;
    beforePopupOpen: Function;
    commonGridColumnOptions: {
        enableFiltering: boolean;
        filter: {
            condition: any;
            placeholder: string;
            disableCancelFilterButton: boolean;
        };
        filterHeaderTemplate: any;
        headerCellTemplate: any;
        sort: {
            direction: string;
        };
    };
    static $inject: string[];
    constructor($scope: any, $timeout: ng.ITimeoutService, notificationService: INotificationService, customUiGridConstants: any, uiGridConstants: any);
    /**
     * Initialization function to get everything setup.
     */
    $onInit(): void;
    /**
     * Clears the selected item.
     */
    clearItem(): void;
    /**
     * Gets all the items filtered, sorted and paged.
     */
    getItems(request: UiGridRequest): Promise<any>;
    /**
     * The function called when the user clicks the ok button.
     * Return false to keep the window open.
     */
    onApprove: () => boolean | void;
    /**
     * The function called when the user clicks the cancel button.
     */
    onDeny: () => void;
    /**
     * Opens the editor when an item is double clicked.
     */
    onDoubleClickEvent(): void;
    /**
     * The function called when the modal window is done closing.
     */
    onHidden: () => void;
    /**
     * Function to open the modal window.
     */
    openModal(): void;
    /**
     * Function to refresh the currently selected item
     */
    private refreshSelectedId();
    private updateItemDisplay();
    /**
     * Watch function to check if the selected id has changed
     */
    selectedIdChanged: (newValue: string, oldValue: string) => void;
    getLoadingClass(): "" | "loading";
}
