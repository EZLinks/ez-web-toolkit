import * as _ from 'lodash';
import { PersistentMessage } from '../models/persistentMessage';

export class PersistentNotificationService implements IPersistentNotificationService {

    public static items = new Array<PersistentMessage>();

    public items(): Array<PersistentMessage> {
        return PersistentNotificationService.items;
    }

    public warn(message: string): void {

        let item = new PersistentMessage();
        item.message = message;
        item.type = 'warning';

        PersistentNotificationService.items.push(item);
    }

    public dismiss(item: PersistentMessage): void {
        _.remove(PersistentNotificationService.items, (itm) => itm === item);
    }
}

export interface IPersistentNotificationService {

    /**
     * get all items in notification queue.
     */
    items() : Array<PersistentMessage>;

    /** 
     * make a warning
     */
    warn(message: string): void;

    /**
     * hides the item from list.
     */
    dismiss(item: PersistentMessage): void;
}