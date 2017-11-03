import { PersistentMessage } from '../models/persistentMessage';
export declare class PersistentNotificationService implements IPersistentNotificationService {
    static items: PersistentMessage[];
    items(): Array<PersistentMessage>;
    warn(message: string): void;
    dismiss(item: PersistentMessage): void;
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
     * hides the item from list.
     */
    dismiss(item: PersistentMessage): void;
}
