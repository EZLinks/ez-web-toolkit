/**
 * @namespace toolkit.baseClasses
 */

import { INotificationService } from '../services/notificationService';
import { BaseManagerController } from '../baseClasses/baseManagerController';
import { EventConsts } from '../constants/eventConsts';

/**
 * @class toolkit.baseClasses.BaseManagerDeletableController<T extends Object>
 * @abstract
 * @extends BaseManagerController
 * @classdesc Methods for manager and extra methods for deleting an item.
 */
export abstract class BaseManagerDeletableController<T> extends BaseManagerController<T> {

    /**
     * Whether delete request is running.
     * @member {boolean} toolkit.baseClasses.BaseManagerDeletableController#isDeleteRequestRunning
     */
    public isDeleteRequestRunning: boolean;

    /**
     * Whether delete prompt is visible.
     * @member {boolean} toolkit.baseClasses.BaseManagerDeletableController#isDeleteItemPromptVisible
     */
    public isDeleteItemPromptVisible: boolean;

    /**
     * Request to sever call to delete an item.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerDeletableController#deleteRequest
     */
    public abstract deleteRequest(): Promise<any>;

    /**
     * Deletes an item.
     * @method toolkit.baseClasses.BaseManagerDeletableController#deleteItem
     */
    deleteItem(): Promise<any> | void {
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

    /**
     * Delete error handling. Could be overriden.
     * @param {any} reject The sever side data.
     * @method toolkit.baseClasses.BaseManagerDeletableController#handleDeleteError
     */
    public handleDeleteError(reject: any): void {
        // could be overriden
    }

    /**
     * Toggles the delete prompt.
     * @param {boolean} value Yes or no.
     * @method toolkit.baseClasses.BaseManagerDeletableController#toggleDeleteItemPrompt
     */
    toggleDeleteItemPrompt(value: boolean) {
        this.isDeleteItemPromptVisible = value;
    }
}
