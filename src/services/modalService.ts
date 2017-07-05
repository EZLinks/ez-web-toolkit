import * as _ from 'lodash';

import { BaseModalController } from '../baseClasses/baseModalController';

export class ModalService implements IModalService {

    //#region Properties

    static modalAnimationTimeout = 650;

    stack: Array<BaseModalController> = [];

    //#endregion

    //#region Constructor

    static $inject = ['$timeout'];

    constructor(private $timeout: ng.ITimeoutService) {
    }

    //#endregion

    //#region Functions

    show(modal: BaseModalController) {
        // If the modal is not already in the stack...
        if (!_.find(this.stack, (element) => { return element === modal; })) {

            // If there is already another modal displayed...
            if (this.stack.length > 0) {
                // Set the currently shown modal to the prevModal
                let prevModal = this.stack[this.stack.length - 1];
                modal.previousModal = prevModal;
            }

            // Add the modal to the stack.
            this.stack.push(modal);

            // If the modal has a parent modal, hide the parent modal (but do
            // not remove it from the DOM).
            if (modal.previousModal) {
                this.$timeout(() => {
                    modal.previousModal.toggleModalVisibility(false);
                });
            }
        }

        // The modal is already in the stack and just needs to be displayed again.
        this.showModal(modal);
    }

    hide(modal: BaseModalController) {
        // Hide the modal.
        this.hideModal(modal);

        // If the modal has a parent modal...
        if (!this.hasPreviousLink(modal)) {

            if (modal.previousModal) {

                let prevModal = modal.previousModal;
                // Now that the modal is closed, show its parent modal.
                this.showModal(prevModal);

                modal.previousModal = null;
            }

            // Remove the modal from the stack.
            _.remove(this.stack, (element) => {
                return element === modal;
            });
        }
    }

    private showModal(modal: BaseModalController) {
        // Add the modal to the DOM and enable its visibility.

        let timeout = ModalService.modalAnimationTimeout;

        // If we have only one modal in stack - show it immediately - first time any modal is opened.
        if (this.stack.length === 1) {
            timeout = 0;
        }

        this.$timeout(() => {
            modal.toggleDomExistence(true);
            modal.toggleModalVisibility(true);
        }, timeout);
    }

    private hideModal(modal: BaseModalController) {
        let hasPreviousLink = this.hasPreviousLink(modal);

        // Disable the modal visibility.
        this.$timeout(() => {
            modal.toggleModalVisibility(false);
        });

        // If a modal has an inner modal, it should not be removed from the DOM
        // so that it preserves any data entered into any form elements.
        //
        // Therefore, if the modal has no inner modal, it can safely be removed
        // from the DOM.
        //
        // Otherwise, if the modal does not have a parent modal and is not
        // specifically set to not be removed from to DOM, it can be removed
        // from the DOM.
        if (!modal.hasInnerModal || (!hasPreviousLink && !modal.doNotRemoveFromDom)) {
            this.$timeout(() => {
                modal.toggleDomExistence(false);
            }, ModalService.modalAnimationTimeout);
        }
    }

    /**
     * Does the modal contain a link to a previous/parent modal?
     */
    private hasPreviousLink(modal: BaseModalController): boolean {
        return _.find(this.stack,
            (element: BaseModalController) => { return element.previousModal === modal; }) !== undefined;
    }

    //#endregion
}

export interface IModalService {

    show(modal: BaseModalController);

    hide(modal: BaseModalController);
}
