import { BaseModalController } from '../../baseClasses/baseModalController';
import { IModalService } from '../../services/modalService';

export class EzModal implements ng.IComponentOptions {

    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;
    public transclude: boolean;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./ezModal.html');
        this.controller = EzModalController;
        this.controllerAs = 'em';
        this.bindings = {

            // The text to be displayed in the modal header.
            headerText: '@emHeaderText',

            // The text to be displayed in the primary button.
            primaryButtonText: '@emPrimaryButtonText',

            // The text to be displayed in the secondary button.
            secondaryButtonText: '@emSecondaryButtonText',

            // The class name to apply to the modal. Because all modals are set
            // as detachable, using the component name as the top-level css
            // selector does not work. The class name allows for styling to be
            // applied to the specific modal.
            className: '@emClassName',

            // Is the modal visible? Two-way bound to allow for the child to
            // update the parent with the status of the modal.
            isVisible: '=emIsVisible',

            // Is the loader visible? Allow the parent to show or hide the
            // loader animation while performing async actions for the modal.
            isLoaderVisible: '=emIsLoaderVisible',

            // Does the modal have a child component that is also a modal?
            hasInnerModal: '<emHasInnerModal',

            /**
             * Executed when the primary button is selected. The positive callback.
             */
            onApprove: '&emOnApprove',

            /**
             * Executed when the secondary button is selected. The negative callback.
             */
            onDeny: '&emOnDeny',

            /**
             * Executed when the modal is shown/opened.
             */
            onShow: '&emOnShow',

            /**
             * Executed when the modal is hidden/closed.
             */
            onHidden: '&emOnHidden'
        };
        this.transclude = true;
    }
}

export class EzModalController extends BaseModalController {

    //#region Properties

    onApprove: Function;
    onDeny: Function;
    isShown: boolean;
    onShow: Function;
    onHidden: Function;

    //#endregion

    //#region Constructor

    static $inject = [
        '$scope',
        '$timeout',
        'modalService'
    ];

    constructor(
        $scope: ng.IScope,
        private $timeout: ng.ITimeoutService,
        modalService: IModalService
    ) {
        super($scope, modalService);
    }

    //#endregion

    //#region Functions

    onHideCallback = () => {

        if (this.onHidden) {
            this.onHidden();
        }

        // timeout needed because callback fires from sm-modal scope
        this.$timeout(() => {
            this.isShown = false;
        });

    }

    onVisibleCallback = () => {

        // timeout needed because callback fires from sm-modal scope
        this.$timeout(() => {
            this.isShown = true;
        });
    }

    onPrimaryButtonClick = () => {
        this.onApprove();
    }

    onSecondaryButtonClick = () => {
        this.isVisible = false;

        // If user clicks on Cancel before modal finishes its show animation, it will not show up again any more
        // even though isModalVisible is set to true
        if (!this.isShown) {
            return;
        }

        if (this.onDeny) {
            // this timeout is needed to ensure the modal stack is in the correct state.
            // if this timeout is not here the modal stack may contain a window that should be closed but will open it.
            this.$timeout(() => {
                this.onDeny();
            });
        }

        this.toggleModalVisibility(false);
    }

    //#endregion
}
