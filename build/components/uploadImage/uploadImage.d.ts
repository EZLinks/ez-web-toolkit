/// <reference types="angular" />
import { INotificationService } from '../../services/notificationService';
/**
 * The upload image component.
 */
export declare class UploadImage implements ng.IComponentOptions {
    templateUrl: string;
    controller: any;
    controllerAs: string;
    bindings: any;
    transclude: {
        [slot: string]: string;
    };
    /**
     * inits component.
     */
    constructor();
}
/**
 * The upload image controller.
 */
export declare class UploadImageController {
    private $scope;
    private notificationService;
    showComponent: boolean;
    /**
     * the request for image upload.
     */
    imageRequest: (file: any) => Promise<string>;
    /**
     * checks if file upload request is running.
     */
    isRequestRunning: boolean;
    /**
     * The existing image source.
     */
    existingImageSrc: string;
    static $inject: string[];
    /**
     * inits controller.
     * @param $timeout
     */
    constructor($scope: ng.IScope, notificationService: INotificationService);
    /**
     * gets the image source.
     * @returns {string}
     */
    readonly imageSrc: string;
    onImageSelect(file: any): void;
}
