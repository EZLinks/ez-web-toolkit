export declare class DatePicker implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    constructor();
}
/**
 * @class toolkit.components.DatePickerController
 * @classdesc Methods for showing date picker component.
 */
export declare class DatePickerController {
    bindings: any;
    format: string;
    status: {
        opened: boolean;
    };
    dateOptions: any;
    modelOptions: {
        timezone: string;
    };
    maxDate: Date;
    minDate: Date;
    date: Date;
    onDateChange: Function;
    depth: string;
    depthMin: string;
    popupTemplate: any;
    datePickerTemplate: any;
    $onInit(): void;
    /**
     * Toggles the calendar on/off when it is off/on.
     *
     * @param {any} $event
     *
     * @memberOf datePickerController
     */
    toggleCalendar($event: any): void;
    /**
     * Toggles the min date between null and today's date;
     *
     *
     * @memberOf DaySelectorController
     */
    toggleMin(): void;
}
