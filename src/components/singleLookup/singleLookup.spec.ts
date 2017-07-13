import * as angular from 'angular';
import 'angular-mocks';
import 'jasmine';

import '../../test';

import './singleLookup.ts';
import { SingleLookupController } from './singleLookup';

import { IUiGridService } from '../../services/uiGridService';
import { INotificationService } from '../../services/notificationService';
import { UiGridRequest } from '../../models/uiGrid/uiGridRequest';

const emptyGUID = '00000000-0000-0000-0000-000000000000';

describe('Component SingleLookup', () => {
    let $rootScope: ng.IRootScopeService,
        $scope: ng.IScope,
        $timeout: ng.ITimeoutService,
        notificationService: INotificationService,
        uiGridConstants,
        customUiGridConstants,
        vm: SingleLookupController,
        $q: ng.IQService;

    beforeEach(() => {
        angular.mock.module('EZ.Test');

        inject(function (
            _$rootScope_: ng.IRootScopeService,
            _$q_: ng.IQService,
            _$timeout_: ng.ITimeoutService,
            _uiGridConstants_,
            _notificationService_: INotificationService,
            _customUiGridConstants_
        ) {
            $rootScope = _$rootScope_;
            $q = _$q_;
            $timeout = _$timeout_;
            uiGridConstants = _uiGridConstants_;
            notificationService = _notificationService_;
            customUiGridConstants = _customUiGridConstants_;
        });
debugger;

        vm = new SingleLookupController(
            $rootScope,
            $timeout,
            notificationService,
            customUiGridConstants,
            uiGridConstants,
        );
    });

    describe('contructor', () => {
        it('should set isModalVisible to false', () => {
            vm = new SingleLookupController(
                $rootScope,
                $timeout,
                notificationService,
                customUiGridConstants,
                uiGridConstants,
            );

            expect(vm.isModalVisible).toBeFalsy();
        });
    });

    describe('$onInit', () => {
        it('should call getSingle and set itemDisplay', () => {
            let id = '555';
            let result = {
                name: 'test name',
                number: 123
            };

            vm.getSingle = null;
            vm.itemTemplate = 'name + \' - \' + number';
            vm.selectedId = id;
            vm.selectedItem = null;

            let getSingleSpy: jasmine.Spy = spyOn(vm, 'getSingle')
                .and
                .callFake(() => {
                    let deferred = $q.defer();
                    deferred.resolve(result);
                    return deferred.promise;
                });

            vm.$onInit();
            $timeout.flush();

            expect(vm.itemDisplay).toEqual('test name - 123');
            expect(vm.selectedItem).toBe(result);
            expect(getSingleSpy).toHaveBeenCalledWith({ id: id });
        });

        it('should not call getSingle and itemDisplay should be undefined', () => {
            vm.getSingle = null;

            let getSingleSpy: jasmine.Spy = spyOn(vm, 'getSingle');

            vm.$onInit();

            expect(vm.itemDisplay).toEqual('');
            expect(vm.selectedItem).toBeNull();
            expect(getSingleSpy).not.toHaveBeenCalled();
        });
    });

    describe('clearItem', () => {
        it('should clear items', () => {
            vm.itemDisplay = 'some string';
            vm.selectedId = '12345';
            vm.selectedItem = {};
            vm.originalItem = {};
            vm.resultCallback = null;

            let resultCallbackSpy: jasmine.Spy = spyOn(vm, 'resultCallback');
            vm.clearItem();

            expect(vm.itemDisplay).toEqual('');
            expect(vm.selectedId).toEqual(emptyGUID);
            expect(vm.selectedItem).toBeNull();
            expect(vm.originalItem).toBeNull();
            expect(resultCallbackSpy).toHaveBeenCalledWith({ result: { id: emptyGUID } });
        });
    });

    describe('getItems', () => {
        it('should call the getData method', () => {
            vm.getData = null;

            let detDataSpy: jasmine.Spy = spyOn(vm, 'getData');
            let gridRequest = new UiGridRequest();

            vm.getItems(gridRequest);

            expect(detDataSpy).toHaveBeenCalledWith({ request: gridRequest });
        });
    });

    describe('onApprove', () => {
        it('should call notificationService.error and not update itemDisplay', () => {
            let notificationServiceSpy: jasmine.Spy = spyOn(notificationService, 'error');

            vm.onApprove();

            expect(notificationServiceSpy).toHaveBeenCalled();
            expect(vm.itemDisplay).toBeUndefined();
        });

        it('should update itemDisplay', () => {
            vm.itemTemplate = 'name + \' - \' + number';
            vm.selectedItem = {
                name: 'test name',
                number: 123
            };

            vm.onApprove();

            expect(vm.itemDisplay).toEqual('test name - 123');
        });
    });

    describe('onDeny', () => {
        it('should set selected item to original item', () => {
            let originalItem = {};

            vm.originalItem = originalItem;
            vm.onDeny();

            expect(vm.selectedItem).toEqual(originalItem);
        });
    });

    describe('onDoubleClickEvent', () => {
        it('should update itemDisplay and set isModalVisible to false', () => {
            vm.isModalVisible = true;
            vm.itemTemplate = 'name + \' - \' + number';
            vm.selectedItem = {
                name: 'test name',
                number: 123
            };

            vm.onDoubleClickEvent();

            expect(vm.itemDisplay).toEqual('test name - 123');
            expect(vm.isModalVisible).toBeFalsy();
        });
    });

    describe('onHidden', () => {
        let resultCallbackSpy: jasmine.Spy;

        beforeEach(() => {
            vm.originalItem = {};
            vm.resultCallback = null;

            resultCallbackSpy = spyOn(vm, 'resultCallback');
        });

        it('should call resultCallback with the selected item and expect items to be reset', () => {
            let selectedItem = {
                id: 123
            };
            vm.selectedItem = selectedItem;

            vm.onHidden();

            expect(vm.originalItem).toBeNull();

            expect(resultCallbackSpy).toHaveBeenCalledWith({ result: selectedItem });
        });

        it('should call resultCallback with emptyGUID and expect items to be reset', () => {
            vm.onHidden();

            expect(vm.originalItem).toBeNull();

            expect(resultCallbackSpy).toHaveBeenCalledWith({ result: { id: emptyGUID } });
        });
    });

    describe('openModal', () => {
        it('should set IsGridVisible and isModalVisible to true', () => {
            expect(vm.isModalVisible).toBeFalsy();

            vm.openModal();

            expect(vm.isModalVisible).toBeTruthy();
        });
    });
});
