
import { BaseComponent } from '../baseClasses/baseComponent';
import { IModalService } from '../services/modalService';

export class BaseModalController extends BaseComponent {

    //#region Constructor

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
            $(`#${this.id}`).modal('hide');
            $(`#${this.id}`).remove();
        });
    }

    //#endregion

    //#region Properties

    id: string;
    className: string;

    previousModal: BaseModalController;

    doNotRemoveFromDom: boolean;

    hasInnerModal: boolean;

    isVisible: boolean;

    isModalVisible: boolean;

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
