import { INotificationService } from '../services/notificationService';
import { BaseManagerController } from '../baseClasses/baseManagerController';
import { EventConsts } from '../constants/eventConsts';

export abstract class BaseManagerDeletableController<T> extends BaseManagerController<T> {

    public isDeleteRequestRunning: boolean;
    public isDeleteItemPromptVisible: boolean;

    /**
     * The delete request.
     */
    public abstract deleteRequest(): Promise<any>;

    /**
     * The delete item request.
     */
    deleteItem(): Promise<any>|void {
        if (!this.isDeleteRequestRunning) {

            this.isDeleteRequestRunning = true;

            return this.deleteRequest()
                .then(resp => {
                    this.notificationService.success('Item deleted.');
                    this.$scope.$broadcast(EventConsts.reloadGridEvent);
                    this.isDeleteItemPromptVisible = false;
                })
                .catch((reject) => {
                    this.handleDeleteError(reject);
                })
                .then(() => {
                    this.$timeout(() => {
                        this.isDeleteRequestRunning = false;
                    });
                });

        }
    }

    public handleDeleteError(reject: any): void {
        // could be overriden
    }

    /**
     * Toggles the delete item prompt.
     */
    toggleDeleteItemPrompt(value: boolean) {
        this.isDeleteItemPromptVisible = value;
    }
}
