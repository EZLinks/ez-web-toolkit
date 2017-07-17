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
 * controller for confirm dialog component.
 */
export declare class ConfirmDialogController {
    onHidden: () => void;
    /**
     * the title of modal.
     */
    title: string;
    /**
     * the text within modal body.
     */
    body: string;
    /**
     * additional body text with additional emphasis.
     */
    callout: string;
    /**
     * on ok button pressed callback.
     */
    onOk: Function;
    /**
     * on cancel button pressed callback.
     */
    onCancel: Function;
    /**
     * shows or hides the overlay loader indicator.
     */
    loader: boolean;
    /**
     * shows or hides the confirm dialog.
     */
    visible: boolean;
    /**
     * the error block.
     */
    errorBlock: ErrorBlockModel;
}
