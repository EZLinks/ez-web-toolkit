import './datePicker.scss';

let popupTemplate = require('ngtemplate-loader!html-loader!./template/datepicker/popup.html');
let datePickerTemplate = require('ngtemplate-loader!html-loader!./template/datepicker/datepicker.html');

/** These are required in this manner as angular bootstrap does not allow changing the day, month and year templates with easily defined variables (scoping is an issue)
 * Requiring the needed files and setting the relative url allows the datepicker to use template-url="*.html"
 */
require('!ngtemplate-loader?relativeTo=/src/components/datePicker/template/datepicker/!html-loader!./template/datepicker/day.html');
require('!ngtemplate-loader?relativeTo=/src/components/datePicker/template/datepicker/!html-loader!./template/datepicker/month.html');
require('!ngtemplate-loader?relativeTo=/src/components/datePicker/template/datepicker/!html-loader!./template/datepicker/year.html');

import * as moment from 'moment';

export class DatePicker implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./datePicker.html');
        this.controller = DatePickerController;
        this.controllerAs = 'dp';
        this.bindings = {
            date: '=date',
            onDateChange: '&onDateChange',
            depth: '=?depth',
            depthMin: '=?depthMin',
            format: '=?format '
        };
    }
}

export class DatePickerController {

    public bindings: any;

    // the date format uses angular's date filter.
    // Format strings are in docs: https://docs.angularjs.org/api/ng/filter/date
    //set now in onInit so can pass format in bindings
    format: string;

    status = {
        opened: false
    };

    dateOptions: any = {
        formatDay: 'd',
        formatYear: 'yy',
        startingDay: 0,
        showWeeks: false
    };

    modelOptions = {
        timezone: moment().format('Z')
    };

    maxDate: Date = moment().add(5, 'years').toDate();

    minDate: Date;

    date: Date;

    onDateChange: Function;

    depth: string;

    depthMin: string;

    popupTemplate = popupTemplate;
    datePickerTemplate = datePickerTemplate;

    $onInit(){
        if (this.depth === undefined){
            this.depth = 'day';
        }
        if (this.depthMin === undefined){
            this.depthMin = 'day';
        }
        if (this.format === undefined){
            this.format = 'mediumDate';
        }
        this.dateOptions.datepickerMode = this.depth;
        this.dateOptions.minMode = this.depthMin;
    }

    /**
     * Toggles the calendar on/off when it is off/on.
     *
     * @param {any} $event
     *
     * @memberOf datePickerController
     */
    toggleCalendar($event) {
        this.status.opened = !this.status.opened;
    }

    /**
     * Toggles the min date between null and today's date;
     *
     *
     * @memberOf DaySelectorController
     */
    toggleMin() {
        this.minDate = this.minDate ? null : moment().toDate();
    }
}
