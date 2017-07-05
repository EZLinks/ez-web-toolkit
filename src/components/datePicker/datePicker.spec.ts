import * as angular from 'angular';
import 'angular-mocks';

import * as moment from 'moment';

import 'modules/common/common';

import { ComponentTest } from 'modules/util/ComponentTest';
import { DatePickerController } from './datePicker';

describe('Component DatePicker', () => {

    let $rootScope: ng.IRootScopeService;

    beforeEach(() => {
        angular.mock.module('360.Common');

        inject(function (_$rootScope_: ng.IRootScopeService): void {
            $rootScope = _$rootScope_;
        });

    });

    describe('toggleCalendar()', () => {
        it('should set the calendar to open', () => {
            let attributes: any = {
                date: new Date(),
                onDateChange: () => { }
            };

            let vm: DatePickerController = new DatePickerController();

            vm.status.opened = false;

            vm.toggleCalendar({});

            expect(vm.status.opened).toBe(true);
        });

        it('should set the calendar to closed', () => {

            let vm: DatePickerController = new DatePickerController();

            vm.status.opened = true;

            vm.toggleCalendar({});

            expect(vm.status.opened).toBe(false);
        });
    });

    describe('toggleMin()', () => {
        it('should set the min date to null', () => {

            let vm: DatePickerController = new DatePickerController();

            vm.minDate = moment().toDate();

            vm.toggleMin();

            expect(vm.minDate).toBeNull();
        });

        it('should set the min date to today\'s date', () => {

            let vm: DatePickerController = new DatePickerController();

            expect(vm.minDate).toBeUndefined('expected the min date to be undefined to start the test but it was not');

            vm.toggleMin();

            expect(vm.minDate.getDate()).toBe(moment().toDate().getDate());
        });
    });
});