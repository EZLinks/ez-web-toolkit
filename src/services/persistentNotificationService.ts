import * as _ from 'lodash';
import { PersistentMessage } from '../models/persistentMessage';

export class PersistentNotificationService implements IPersistentNotificationService {

    public static items = new Array<PersistentMessage>();

    public items(): Array<PersistentMessage> {
        return PersistentNotificationService.items;
    }

    public warn(message: string): void {
        this.addMesage(message, 'warning');
    }

    public error(message: string): void {
        this.addMesage(message, 'error');
    }

    public dismiss(item: PersistentMessage): void {
        _.remove(PersistentNotificationService.items, (itm) => itm === item);
    }

    private addMesage(message: string, type: string): void {
        let item = new PersistentMessage();
        item.message = message;
        item.type = type;

        PersistentNotificationService.items.push(item);
    }
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