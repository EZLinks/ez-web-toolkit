import { IPersistentNotificationService } from '../../services/persistentNotificationService';
import { PersistentMessage } from '../../models/persistentMessage';

export class NotificationViewer implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./notificationViewer.html');
        this.controller = NotificationViewerController;
        this.controllerAs = 'nv';
        this.bindings = {

        };
    }
}

export class NotificationViewerController {

    //#region Properties

    public get items() {
        return this.service.items();
    }

    //#endregion

    //#region Constructor

    static $inject = ['persistentNotificationService'];

    constructor(private service: IPersistentNotificationService) {

    }

    //#endregion

    //#region Functions

    public dismiss(item): void {
        this.service.dismiss(item);
    }

    //#endregion
}
