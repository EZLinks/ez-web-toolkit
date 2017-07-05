/// <reference types="angular" />
export declare class BaseComponent {
    unwatchArray: Array<Function>;
    destroy: () => void;
    constructor($scope: ng.IScope, additionalDestruction?: Function);
}
