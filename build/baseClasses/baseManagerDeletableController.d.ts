/**
 * @namespace toolkit.baseClasses
 */
import { BaseManagerController } from '../baseClasses/baseManagerController';
/**
 * @class toolkit.baseClasses.BaseManagerDeletableController<T extends Object>
 * @abstract
 * @extends BaseManagerController
 * @classdesc Methods for manager and extra methods for deleting an item.
 */
export declare abstract class BaseManagerDeletableController<T> extends BaseManagerController<T> {
    /**
     * Whether delete request is running.
     * @member {boolean} toolkit.baseClasses.BaseManagerDeletableController#isDeleteRequestRunning
     */
    isDeleteRequestRunning: boolean;
    /**
     * Whether delete prompt is visible.
     * @member {boolean} toolkit.baseClasses.BaseManagerDeletableController#isDeleteItemPromptVisible
     */
    isDeleteItemPromptVisible: boolean;
    /**
     * Request to sever call to delete an item.
     * @abstract
     * @method toolkit.baseClasses.BaseManagerDeletableController#deleteRequest
     */
    abstract deleteRequest(): Promise<any>;
    /**
     * Deletes an item.
     * @method toolkit.baseClasses.BaseManagerDeletableController#deleteItem
     */
    deleteItem(): Promise<any> | void;
    /**
     * Delete error handling. Could be overriden.
     * @param {any} reject The sever side data.
     * @method toolkit.baseClasses.BaseManagerDeletableController#handleDeleteError
     */
    handleDeleteError(reject: any): void;
    /**
     * Toggles the delete prompt.
     * @param {boolean} value Yes or no.
     * @method toolkit.baseClasses.BaseManagerDeletableController#toggleDeleteItemPrompt
     */
    toggleDeleteItemPrompt(value: boolean): void;
}
