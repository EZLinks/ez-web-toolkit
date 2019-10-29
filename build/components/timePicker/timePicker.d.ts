/**
 * @namespace toolkit.components
 */
/// <reference types="angular" />
export declare class TimePicker implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    constructor();
}
/**
 * @class toolkit.components.TimePickerController
 * @classdesc Methods for showing the time picker component.
 */
export declare class TimePickerController {
    bindings: any;
    time: Date;
    hStep: number;
    mStep: number;
    isMeridian: boolean;
    $onInit(): void;
    /**
     * Fires when the date changes. Not yet used.
     *
     * @memberOf TimePickerController
     */
    changed(): void;
}
