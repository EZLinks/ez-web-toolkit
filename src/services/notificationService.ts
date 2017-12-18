import * as toastr from 'toastr';
import * as angular from 'angular';

/**
 * notification service implementation
 */
export class NotificationService implements INotificationService {

    private static options: any = {
        tapToDismiss: false,
        closeButton: true,
        toastClass: 'toast',
        containerId: 'toast-container',
        debug: false,
    
        showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
        showDuration: 300,
        showEasing: 'swing', //swing and linear are built into jQuery
        onShown: undefined,
        hideMethod: 'fadeOut',
        hideDuration: 300,
        hideEasing: 'swing',
        onHidden: undefined,
    
        extendedTimeOut: 1000,
        positionClass: 'toast-top-right',
        timeOut: 3000, // Set timeOut and extendedTimeout to 0 to make it sticky
        titleClass: 'toast-title',
        messageClass: 'toast-message',
        target: 'body',
        closeHtml: '<button>&times;</button>',
        newestOnTop: true
    };

    public success(message: string, title: string = '', optionsOverride: any = {}): void {

        var opts = {};
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;

        toastr.success(message, title, mergedConfig);
    }

    public error(message: string, title: string = '', optionsOverride: any = {}): void {

        var opts = { timeOut: 0 };
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;

        toastr.error(message, title, mergedConfig);
    }

    public info(message: string, title: string = '', optionsOverride: any = {}): void {

        var opts = {};
        var mergedConfig = angular.extend({}, NotificationService.options, opts, optionsOverride);
        mergedConfig.extendedTimeOut = mergedConfig.timeOut;

        toastr.info(message, title, mergedConfig);
    }
}

/**
 * notification service interface
 */
export interface INotificationService {

    /**
     * success notification
     */
    success(message: String, title?: string, optionsOverride?: any): void;

    /**
     * error notification
     */
    error(message: String, title?: string, optionsOverride?: any): void;

    /**
     * info notification
     */
    info(message: String, title?: string, optionsOverride?: any): void;
}
