import * as angular from 'angular';
import 'jasmine';

import './ezGrid.ts';
import {EzGridController} from './ezGrid';

import { IUiGridService } from '../../services/uiGridService';

describe('Component EzGrid', () => {
    let uiGridService: IUiGridService<any>;
    let vm: EzGridController;

    let $rootScope: ng.IRootScopeService;

    beforeEach(() => {
        angular.mock.module('EZ.Test');

        inject(function(
            _$rootScope_: ng.IRootScopeService,
            _uiGridService_: IUiGridService<any>){

           $rootScope = _$rootScope_;
           uiGridService = _uiGridService_;
        });

        vm = new EzGridController($rootScope, uiGridService);
    });

    describe('hasNoItems()', () => {
        it('should return true when data is empty', () => {

            vm.isRequestRunning = false;
            vm.gridOptions = {
                data: []
            };

            let result = vm.hasNoItems();

            expect(result).toBeTruthy();
        });

        it('should return false when data is not empty', () => {

            vm.isRequestRunning = false;
            vm.gridOptions = {
                data: [1,2,3]
            };

            let result = vm.hasNoItems();

            expect(result).toBeFalsy();
        });
    });
});
