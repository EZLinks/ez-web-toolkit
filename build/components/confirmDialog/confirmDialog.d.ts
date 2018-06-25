/**
 * @namespace toolkit.components
 */
import { ErrorBlockModel } from '../../models/errorBlock';
/**
 * the confirm dialog component.
 */
export declare class ConfirmDialog {
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
 * @class toolkit.components.ConfirmDialogController
 * @classdesc Methods for showing confirm dialog popup.
 */
export declare class ConfirmDialogController {
    /**
     * Hides the error block on popup hide.
     * @method toolkit.baseClasses.ConfirmDialogController#onHidden
     */
    onHidden: () => void;
    /**
     * The title of modal.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#title
     */
    title: string;
    /**
     * The text inside modal body.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#body
     */
    body: string;
    /**
     * Additional body text with additional emphasis.
     * @member {string} toolkit.baseClasses.ConfirmDialogController#callout
     */
    callout: string;
    /**
     * On ok button pressed callback.
     * @member {Function} toolkit.baseClasses.ConfirmDialogController#onOk
     */
    onOk: Function;
    /**
     * On cancel button pressed callback.
     * @member {Function} toolkit.baseClasses.ConfirmDialogController#onCancel
     */
    onCancel: Function;
    /**
     * Shows or hides the overlay loader indicator.
     * @member {boolean} toolkit.baseClasses.ConfirmDialogController#loader
     */
    loader: boolean;
    /**
     * Shows or hides the confirm dialog.
     * @member {boolean} toolkit.baseClasses.ConfirmDialogController#visible
     */
    visible: boolean;
    /**
     * The error block.
     * @member {ErrorBlockModel} toolkit.baseClasses.ConfirmDialogController#errorBlock
     */
    errorBlock: ErrorBlockModel;
}
