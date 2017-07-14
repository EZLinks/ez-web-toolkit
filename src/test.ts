
import * as angular from 'angular';
import 'angular-ui-grid';

import { CustomUiGridConstants } from './constants/customUiGridConstants';

import {
    BaseClasses,
    Components,
    Constants,
    Enums,
    Exceptions,
    Models,
    Services
} from './index';

export class Test {

}

angular.module('EZ.Test', ['ui.grid', require('angular-mocks/ngMock')])
    .constant('customUiGridConstants', CustomUiGridConstants.Default)
    .component('confirmDialog', new Components.ConfirmDialog())
    .component('datePicker', new Components.DatePicker())
    .component('errorBlock', new Components.ErrorBlock())
    .component('ezGrid', new Components.EzGrid())
    .component('ezModal', new Components.EzModal())
    .component('singleLookup', new Components.SingleLookup())
    .component('uploadImage', new Components.UploadImage())
    .service('responseHandlers', Services.ResponseHandlers)
    .service('apiService', Services.ApiService)
    .service('modalService', Services.ModalService)
    .service('notificationService', Services.NotificationService)
    .service('processingService', Services.ProcessingService)
    .service('serverValidationService', Services.ServerValidationService)
    .service('serviceRequestProcessor', Services.ServiceRequestProcessor)
    .service('uiGridService', Services.UiGridService);
