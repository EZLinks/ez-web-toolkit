import './confirmDialog.scss';

import { ErrorBlockModel } from '../../models/errorBlock';

/**
 * the confirm dialog component.
 */
export class ConfirmDialog {

    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    /**
     * inits component.
     */
    constructor() {

        this.controller = ConfirmDialogController;
        this.controllerAs = 'cd';
        this.templateUrl = require('ngtemplate-loader!html-loader!./confirmDialog.html');
        this.bindings = {
            title: '@cdTitle',
            body: '@cdBody',
            callout: '@cdCallout',
            onOk: '&cdOnOk',
            onCancel: '&cdOnCancel',
            loader: '=cdLoader',
            visible: '=cdVisible',
            errorBlock: '=cdError'
        };
    }
}

/**
 * controller for confirm dialog component.
 */
export class ConfirmDialogController {

    onHidden = () => {
        if (this.errorBlock) {
            this.errorBlock.showError = false;
        }
    }

    /**
     * the title of modal.
     */
    public title: string;

    /**
     * the text within modal body.
     */
    public body: string;

    /**
     * additional body text with additional emphasis.
     */
    public callout: string;

    /**
     * on ok button pressed callback.
     */
    public onOk: Function;

    /**
     * on cancel button pressed callback.
     */
    public onCancel: Function;

    /**
     * shows or hides the overlay loader indicator.
     */
    public loader: boolean;

    /**
     * shows or hides the confirm dialog.
     */
    public visible: boolean;

    /**
     * the error block.
     */
    public errorBlock: ErrorBlockModel;
}
