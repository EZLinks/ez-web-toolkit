import { IPersistentNotificationService } from '../../services/persistentNotificationService';
import { PersistentMessage } from '../../models/persistentMessage';
export declare class NotificationViewer implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    constructor();
}
export declare class NotificationViewerController {
    private service;
    readonly items: PersistentMessage[];
    static $inject: string[];
    constructor(service: IPersistentNotificationService);
    dismiss(item: any): void;
}
