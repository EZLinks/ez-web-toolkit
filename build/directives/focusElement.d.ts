/// <reference types="angular" />
/// <reference types="angular-mocks" />
/**
 * @namespace toolkit.directives
 */
/**
* @class toolkit.directives.FocusElement
* @classdesc Makes a focus on element while loaded.
*/
export declare class FocusElement implements ng.IDirective {
    private $timeout;
    restrict: string;
    constructor($timeout: ng.ITimeoutService);
    /**
     * creates a factory for directive
     */
    static factory(): ng.IDirectiveFactory;
    /**
     * link for directive.
     *
     * @param scope
     * @param element
     * @param attrs
     * @param ctrl
     */
    link(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void;
}
