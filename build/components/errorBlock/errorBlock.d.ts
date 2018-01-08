/**
 * @namespace toolkit.components
 */
import { ErrorBlockModel } from '../../models/errorBlock';
export declare class ErrorBlock {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    /**
     * inits component.
     */
    constructor();
}
/**
 * @class toolkit.components.ErrorBlockController
 * @classdesc Methods for showing errors in popup.
 */
export declare class ErrorBlockController {
    /**
     * the error block.
     */
    errorBlock: ErrorBlockModel;
    readonly showError: boolean;
}
