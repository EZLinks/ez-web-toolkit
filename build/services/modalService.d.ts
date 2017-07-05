/// <reference types="angular" />
/// <reference types="angular-mocks" />
import { BaseModalController } from '../baseClasses/baseModalController';
export declare class ModalService implements IModalService {
    private $timeout;
    static modalAnimationTimeout: number;
    stack: Array<BaseModalController>;
    static $inject: string[];
    constructor($timeout: ng.ITimeoutService);
    show(modal: BaseModalController): void;
    hide(modal: BaseModalController): void;
    private showModal(modal);
    private hideModal(modal);
    /**
     * Does the modal contain a link to a previous/parent modal?
     */
    private hasPreviousLink(modal);
}
export interface IModalService {
    show(modal: BaseModalController): any;
    hide(modal: BaseModalController): any;
}
