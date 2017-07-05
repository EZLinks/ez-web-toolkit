import { ErrorBlockModel } from '../../models/errorBlock';
/**
 * the error block component.
 */
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
 * controller for error block component.
 */
export declare class ErrorBlockController {
    /**
     * the error block.
     */
    errorBlock: ErrorBlockModel;
    readonly showError: boolean;
}
