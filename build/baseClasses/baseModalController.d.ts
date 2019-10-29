/**
 * @namespace toolkit.baseClasses
 */
/// <reference types="angular" />
import { BaseComponent } from '../baseClasses/baseComponent';
import { IModalService } from '../services/modalService';
export declare class BaseModalController extends BaseComponent {
    $scope: ng.IScope;
    modalService: IModalService;
    /**
     * @class toolkit.baseClasses.BaseModalController
     * @extends BaseComponent
     * @classdesc Methods for manage modals.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {IModalService} modalService The modal service.
     */
    constructor($scope: ng.IScope, modalService: IModalService);
    $onInit(): void;
    /**
     * The modal id.
     * @member {string} toolkit.baseClasses.BaseModalController#id
     */
    id: string;
    /**
     * The modal class name.
     * @member {string} toolkit.baseClasses.BaseModalController#className
     */
    className: string;
    /**
     * Reference to the previous modal.
     * @member {BaseModalController} toolkit.baseClasses.BaseModalController#previousModal
     */
    previousModal: BaseModalController;
    /**
     * Whether to completely remove modal from dom.
     * @member {boolean} toolkit.baseClasses.BaseModalController#doNotRemoveFromDom
     */
    doNotRemoveFromDom: boolean;
    /**
     * Whether current modal has any inner modals.
     * @member {boolean} toolkit.baseClasses.BaseModalController#hasInnerModal
     */
    hasInnerModal: boolean;
    /**
     * Whether modal is visible.
     * @member {boolean} toolkit.baseClasses.BaseModalController#isVisible
     */
    isVisible: boolean;
    /**
     * Whether modal is visible.
     * @member {boolean} toolkit.baseClasses.BaseModalController#isModalVisible
     */
    isModalVisible: boolean;
    /**
     * Whether dom of the modal is visible.
     * @member {boolean} toolkit.baseClasses.BaseModalController#isInDom
     */
    isInDom: boolean;
    /**
     * if set to true, does not open other previous modals when being closed
     */
    closeLast: boolean;
    modalVisibilityUpdated: (val: any, old: any) => void;
    toggleModalVisibility(val: boolean): void;
    toggleDomExistence(val: boolean): void;
}
