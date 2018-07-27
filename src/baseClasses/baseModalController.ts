/**
 * @namespace toolkit.baseClasses
 */

import { BaseComponent } from '../baseClasses/baseComponent';
import { IModalService } from '../services/modalService';

export class BaseModalController extends BaseComponent {

    //#region Constructor

    /**
     * @class toolkit.baseClasses.BaseModalController
     * @extends BaseComponent
     * @classdesc Methods for manage modals.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {IModalService} modalService The modal service.
     */
    constructor(
        public $scope: ng.IScope,
        public modalService: IModalService
    ) {
        super($scope);
    }

    $onInit() {

        this.$scope.$watch(() => this.isVisible, this.modalVisibilityUpdated);

        // https://gist.github.com/gordonbrander/2230317
        this.id = Math.random().toString(36).substr(2, 9);

        this.unwatchArray.push(() => {
            this.modalService.hide(this);
            
            if ($(`#${this.id}`).modal) {
                $(`#${this.id}`).modal('hide');
            }
            
            $(`#${this.id}`).remove();
        });
    }

    //#endregion

    //#region Properties

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

    //#endregion

    //#region Functions

    modalVisibilityUpdated = (val, old) => {
        if (val !== old) {
            val ? this.modalService.show(this)
                : this.modalService.hide(this);
        }
    }

    toggleModalVisibility(val: boolean) {
        this.isVisible = val;
        this.isModalVisible = val;
    }

    toggleDomExistence(val: boolean) {
        this.isInDom = val;
    }

    //#endregion
}
