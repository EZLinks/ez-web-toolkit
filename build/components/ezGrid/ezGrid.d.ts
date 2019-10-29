/**
 * @namespace toolkit.components
 */
/// <reference types="angular" />
import { BaseLookupController } from '../../baseClasses/baseLookupController';
import { IUiGridService } from '../../services/uiGridService';
export declare class EzGrid implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    constructor();
}
/**
 * @class toolkit.components.EzGridController
 * @classdesc A grid component.
 */
export declare class EzGridController extends BaseLookupController<any> {
    private uiGridService;
    static $inject: string[];
    constructor($scope: any, uiGridService: IUiGridService<any>);
    $onInit(): void;
    reloadGrid(): any;
    /**
     * Is the grid actually empty? Ensure there is no request currently running
     * and that the grid data is empty.
     */
    hasNoItems(): boolean;
}
