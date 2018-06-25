/// <reference types="angular" />
/// <reference types="angular-mocks" />
/**
 * @namespace toolkit.components
 */
import { BaseModalController } from '../../baseClasses/baseModalController';
import { IModalService } from '../../services/modalService';
export declare class EzModal implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    transclude: boolean;
    constructor();
}
/**
 * @class toolkit.components.EzModalController
 * @classdesc A modal component.
 */
export declare class EzModalController extends BaseModalController {
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
