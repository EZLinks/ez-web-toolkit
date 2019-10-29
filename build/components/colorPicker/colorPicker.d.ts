/**
 * @namespace toolkit.components
 */
/// <reference types="angular" />
export declare class ColorPicker implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    constructor();
}
/**
 * @class toolkit.components.ColorPickerController
 * @classdesc Methods for showing the color picker component.
 * @requires {@link https://github.com/buberdds/angular-bootstrap-colorpicker | angular-bootstrap-colorpicker }
 */
export declare class ColorPickerController {
    color: string;
    text: string;
    $onInit(): void;
}
