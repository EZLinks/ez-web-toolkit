import { PersistentMessage } from '../models/persistentMessage';
export declare class PersistentNotificationService implements IPersistentNotificationService {
    static items: PersistentMessage[];
    items(): Array<PersistentMessage>;
    warn(message: string): void;
    error(message: string): void;
    dismiss(item: PersistentMessage): void;
    private addMesage(message, type);
}
export interface IPersistentNotificationService {
    /**
     * get all items in notification queue.
     */
    items(): Array<PersistentMessage>;
    /**
     * make a warning
     */
    warn(message: string): void;
    /**
     * make an error message
     */
    error(message: string): void;
    /**
     * hides the item from list.
     */
    dismiss(item: PersistentMessage): void;
}
