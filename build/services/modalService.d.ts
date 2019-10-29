/**
 * @namespace toolkit.services
 */
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
    private showModal;
    private hideModal;
    /**
     * Does the modal contain a link to a previous/parent modal?
     */
    private hasPreviousLink;
}
/**
 * @interface
 * @class toolkit.services.IModalService
 * @classdesc The common service for showing and hiding modals.
 */
export interface IModalService {
    /**
     * Shows a modal.
     * @method toolkit.services.IModalService#show
     * @param {BaseModalController} modal - The modal to show.
     */
    show(modal: BaseModalController): any;
    /**
     * Hides a modal.
     * @method toolkit.services.IModalService#hide
     * @param {BaseModalController} modal - The modal to hide.
     */
    hide(modal: BaseModalController): any;
}
