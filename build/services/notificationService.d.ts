/**
 * notification service implementation
 */
export declare class NotificationService implements INotificationService {
    success(message: string): void;
    error(message: string): void;
    info(message: string): void;
}
/**
 * notification service interface
 */
export interface INotificationService {
    /**
     * success notification
     */
    success(message: String): void;
    /**
     * error notification
     */
    error(message: String): void;
    /**
     * info notification
     */
    info(message: String): void;
}
