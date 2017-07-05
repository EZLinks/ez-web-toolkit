/// <reference types="angular" />
import { BaseComponent } from '../baseClasses/baseComponent';
import { IModalService } from '../services/modalService';
export declare class BaseModalController extends BaseComponent {
    $scope: ng.IScope;
    modalService: IModalService;
    constructor($scope: ng.IScope, modalService: IModalService);
    $onInit(): void;
    id: string;
    className: string;
    previousModal: BaseModalController;
    doNotRemoveFromDom: boolean;
    hasInnerModal: boolean;
    isVisible: boolean;
    isModalVisible: boolean;
    isInDom: boolean;
    modalVisibilityUpdated: (val: any, old: any) => void;
    toggleModalVisibility(val: boolean): void;
    toggleDomExistence(val: boolean): void;
}
