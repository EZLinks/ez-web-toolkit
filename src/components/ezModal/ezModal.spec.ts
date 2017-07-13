import * as angular from 'angular';
import 'jasmine';

import './ezModal.ts';
import { EzModalController } from './ezModal';

import { IModalService } from '../../services/modalService';

describe('Component EzModal', () => {
    let vm: EzModalController;

    let modalService: IModalService,
        $rootScope: ng.IRootScopeService,
        $timeout;

    beforeEach(() => {
        angular.mock.module('EZ.Test');
        angular.mock.module('EZ.Test');

        inject(function (
            _$rootScope_: ng.IRootScopeService,
            _$timeout_: ng.ITimeoutService,
            _modalService_: IModalService
        ) {
            $rootScope = _$rootScope_;
            $timeout = _$timeout_;
            modalService = _modalService_;
        });

        vm = new EzModalController($rootScope, $timeout, modalService);
    });

    describe('onPrimaryButtonClick()', () => {
        it('should call onApprove()', () => {
            vm.onApprove = null;
            let onApproveSpy: jasmine.Spy = spyOn(vm, 'onApprove');

            vm.onPrimaryButtonClick();

            expect(onApproveSpy).toHaveBeenCalled();
        });
    });

    describe('onSecondaryButtonClick()', () => {
        it('should call onApprove() and set isVisible to false', () => {
            vm.isShown = true;
            vm.onDeny = null;
            let onDenySpy: jasmine.Spy = spyOn(vm, 'onDeny');

            vm.onSecondaryButtonClick();

            $timeout.flush();

            expect(onDenySpy).toHaveBeenCalled();
            expect(vm.isVisible).toBeFalsy();
        });
    });
});
