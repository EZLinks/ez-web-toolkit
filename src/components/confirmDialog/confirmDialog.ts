/**
 * @namespace toolkit.components
 */

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
 * @class toolkit.components.ConfirmDialogController
 * @classdesc Methods for showing confirm dialog popup.
 */
export class ConfirmDialogController {

    /**
     * Hides the error block on popup hide.
     * @method toolkit.baseClasses.ConfirmDialogController#onHidden
     */
    onHidden = () => {
        if (this.errorBlock) {
            this.errorBlock.showError = false;
        }
    }

    /**
     * The title of modal.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#title
     */
    public title: string;

    /**
     * The text inside modal body.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#body
     */
    public body: string;

    /**
     * Additional body text with additional emphasis.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#callout
     */    
    public callout: string;

    /**
     * On ok button pressed callback.
     * @member {Function} toolkit.baseClasses.ConfirmDialogController#onOk
     */    
    public onOk: Function;

    /**
     * On cancel button pressed callback.
     * @member {Function} toolkit.baseClasses.ConfirmDialogController#onCancel
     */        
     public onCancel: Function;

    /**
     * Shows or hides the overlay loader indicator.
     * @member {boolean} toolkit.baseClasses.ConfirmDialogController#loader
     */          
     public loader: boolean;

    /**
     * Shows or hides the confirm dialog.
     * @member {boolean} toolkit.baseClasses.ConfirmDialogController#visible
     */              
    public visible: boolean;

    /**
     * The error block.
     * @member {ErrorBlockModel} toolkit.baseClasses.ConfirmDialogController#errorBlock
     */            
    public errorBlock: ErrorBlockModel;
}
