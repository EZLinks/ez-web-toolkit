import { ErrorBlockModel } from '../../models/errorBlock';

/**
 * the error block component.
 */
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
 * controller for error block component.
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
