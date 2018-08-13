/**
 * @namespace toolkit.components
 */

require('!ngtemplate-loader?relativeTo=/src/components/timePicker/template/timepicker/!html-loader!./template/timepicker/timepicker.html');

export class TimePicker implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./timePicker.html');
        this.controller = TimePickerController;
        this.controllerAs = 'tp';
        this.bindings = {
            time: '=time',
            hStep: '=?hStep',
            mStep: '=?mStep',
            isMeridian: '=?isMeridian'
        };
    }
}

/**
 * @class toolkit.components.TimePickerController
 * @classdesc Methods for showing the time picker component.
 */
export class TimePickerController {
    public bindings: any;

    public time: Date;
    public hStep: number;
    public mStep: number;
    public isMeridian: boolean;

    $onInit() {
        if (this.hStep === undefined) {
            this.hStep = 1;
        }

        if (this.mStep === undefined) {
            this.mStep = 5;
        }

        if (this.isMeridian === undefined) {
            this.isMeridian = true;
        }
    }

    /**
     * Fires when the date changes. Not yet used.
     * 
     * @memberOf TimePickerController
     */
    changed() {

    }
}