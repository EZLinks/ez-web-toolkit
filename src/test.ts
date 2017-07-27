
import * as angular from 'angular';
import 'angular-ui-grid';

import { CustomUiGridConstants } from './constants/customUiGridConstants';

import {
    ResponseHandlers,
    ApiService,
    ModalService,
    NotificationService,
    ProcessingService,
    ServerValidationService,
    ServiceRequestProcessor,
    UiGridService
} from './index';

import {
    ConfirmDialog,
    DatePicker,
    ErrorBlock,
    EzGrid,
    EzModal,
    SingleLookup,
    UploadImage
} from './index';

export class Test {

}

angular.module('EZ.Test', ['ui.grid', require('angular-mocks/ngMock')])
    .constant('customUiGridConstants', CustomUiGridConstants.Default)
    .component('confirmDialog', new ConfirmDialog())
    .component('datePicker', new DatePicker())
    .component('errorBlock', new ErrorBlock())
    .component('ezGrid', new EzGrid())
    .component('ezModal', new EzModal())
    .component('singleLookup', new SingleLookup())
    .component('uploadImage', new UploadImage())
    .service('responseHandlers', ResponseHandlers)
    .service('apiService', ApiService)
    .service('modalService', ModalService)
    .service('notificationService', NotificationService)
    .service('processingService', ProcessingService)
    .service('serverValidationService', ServerValidationService)
    .service('serviceRequestProcessor', ServiceRequestProcessor)
    .service('uiGridService', UiGridService);
