import { BaseManagerController } from '../baseClasses/baseManagerController';
export declare abstract class BaseManagerDeletableController<T> extends BaseManagerController<T> {
    isDeleteRequestRunning: boolean;
    isDeleteItemPromptVisible: boolean;
    /**
     * The delete request.
     */
    abstract deleteRequest(): Promise<any>;
    /**
     * The delete item request.
     */
    deleteItem(): Promise<any> | void;
    handleDeleteError(reject: any): void;
    /**
     * Toggles the delete item prompt.
     */
    toggleDeleteItemPrompt(value: boolean): void;
}
