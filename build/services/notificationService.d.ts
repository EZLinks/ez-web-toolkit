/**
 * notification service implementation
 */
export declare class NotificationService implements INotificationService {
    private static options;
    success(message: string, title?: string, optionsOverride?: any): void;
    error(message: string, title?: string, optionsOverride?: any): void;
    info(message: string, title?: string, optionsOverride?: any): void;
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
