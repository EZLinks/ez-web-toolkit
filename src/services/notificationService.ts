import * as toastr from 'toastr';

/**
 * notification service implementation
 */
export class NotificationService implements INotificationService {

    public success(message: string): void {
        toastr.success(message);
    }

    public error(message: string): void {
        toastr.error(message);
    }

    public info(message: string): void {
        toastr.info(message);
    }
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
