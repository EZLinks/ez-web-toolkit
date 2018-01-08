/**
 * @namespace toolkit.components
 */

import { ErrorBlockModel } from '../../models/errorBlock';

export class ErrorBlock {

    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    /**
     * inits component.
     */
    constructor() {

        this.controller = ErrorBlockController;
        this.controllerAs = 'eb';
        this.templateUrl = require('ngtemplate-loader!html-loader!./errorBlock.html');
        this.bindings = {
            errorBlock: '=ebError'
        };
    }
}

/**
 * @class toolkit.components.ErrorBlockController
 * @classdesc Methods for showing errors in popup.
 */
export class ErrorBlockController {

    /**
     * the error block.
     */
    public errorBlock: ErrorBlockModel;

    public get showError() {
        return this.errorBlock && this.errorBlock.showError;
    }
}
