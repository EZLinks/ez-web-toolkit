/**
 * @namespace toolkit.components
 */
/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { BaseModalController } from '../../baseClasses/baseModalController';
import { IModalService } from '../../services/modalService';
export declare class EzModalTransclude implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    transclude: {};
    constructor();
}
/**
 * @class toolkit.components.EzModalController
 * @classdesc A modal component.
 */
export declare class EzModalTranscludeController extends BaseModalController {
    private $timeout;
    onApprove: Function;
    onDeny: Function;
    isShown: boolean;
    onShow: Function;
    onHidden: Function;
    static $inject: string[];
    constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, modalService: IModalService);
    onHideCallback: () => void;
    onVisibleCallback: () => void;
    onPrimaryButtonClick: () => void;
    onSecondaryButtonClick: () => void;
}
