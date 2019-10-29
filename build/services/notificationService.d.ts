/**
 * @namespace toolkit.services
 */
/**
 * notification service implementation
 */
export declare class NotificationService implements INotificationService {
    private static options;
    success(message: string, title?: string, optionsOverride?: any): void;
    error(message: string, title?: string, optionsOverride?: any): void;
    info(message: string, title?: string, optionsOverride?: any): void;
    warn(message: String, title?: string, optionsOverride?: any): void;
}
/**
 * @interface
 * @class toolkit.services.INotificationService
 * @classdesc Makes a notification toasts for a user. Om-nom-nom.
 */
export interface INotificationService {
    /**
    * Success notification.
    * @method toolkit.services.INotificationService#success
    * @param {String} message - messsage.
    * @param {String} title - title, optional.
    * @param {any} optionsOverride - overrides toastr options.
    */
    success(message: String, title?: string, optionsOverride?: any): void;
    /**
    * Error notification.
    * @method toolkit.services.INotificationService#error
    * @param {String} message - messsage.
    * @param {String} title - title, optional.
    * @param {any} optionsOverride - overrides toastr options.
    */
    error(message: String, title?: string, optionsOverride?: any): void;
    /**
    * Info notification.
    * @method toolkit.services.INotificationService#info
    * @param {String} message - messsage.
    * @param {String} title - title, optional.
    * @param {any} optionsOverride - overrides toastr options.
    */
    info(message: String, title?: string, optionsOverride?: any): void;
    /**
     * Warning notification.
     * @method toolkit.services.INotificationService#info
     * @param {String} message - messsage.
     * @param {String} title - title, optional.
     * @param {any} optionsOverride - overrides toastr options.
     */
    warn(message: String, title?: string, optionsOverride?: any): void;
}
