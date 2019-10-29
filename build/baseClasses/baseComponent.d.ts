/**
 * @namespace toolkit.baseClasses
 */
/// <reference types="angular" />
export declare class BaseComponent {
    /**
     * Array of watch callbacks which would be unwatched on scope destroy.
     * @member {Array<Function>} toolkit.baseClasses.BaseComponent#unwatchArray
     */
    unwatchArray: Array<Function>;
    private destroy;
    /**
     * @class toolkit.baseClasses.BaseComponent
     * @classdesc Automatically handles the scope destroy callbacks and watches.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {Function} additionalDestruction Callback which would be called on scope destroy.
     */
    constructor($scope: ng.IScope, additionalDestruction?: Function);
}
