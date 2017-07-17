
import { INotificationService } from '../../services/notificationService';

/**
 * The upload image component.
 */
export class UploadImage implements ng.IComponentOptions {

    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;
    public transclude: { [slot: string]: string };

    /**
     * inits component.
     */
    constructor() {

        this.templateUrl = require('ngtemplate-loader!html-loader!./uploadImage.html');
        this.controller = UploadImageController;
        this.controllerAs = 'ui';
        this.bindings = {
            imageRequest: '&uiImageUploadRequest',
            existingImageSrc: '=uiExistingImageSrc'
        };
    }
}

/**
 * The upload image controller.
 */
export class UploadImageController {

    public showComponent: boolean;

    /**
     * the request for image upload.
     */
    public imageRequest: (file: any) => Promise<string>;

    /**
     * checks if file upload request is running.
     */
    public isRequestRunning: boolean;

    /**
     * The existing image source.
     */
    public existingImageSrc: string;

    static $inject = [
        '$scope',
        'notificationService'
    ];

    /**
     * inits controller.
     * @param $timeout
     */
    constructor(
        private $scope: ng.IScope,
        private notificationService: INotificationService
    ) {
    }

    /**
     * gets the image source.
     * @returns {string}
     */
    public get imageSrc(): string {
        return this.existingImageSrc;
    }

    // occurs on image being selected
    public onImageSelect(file: any): void {
        if (!file || this.isRequestRunning) {
            return;
        }

        this.isRequestRunning = true;

        this.imageRequest({ file: file })
            .catch(() => {
                // nothing needs to be done
            })
            .then(() => {
                this.$scope.$apply(() => {
                    this.isRequestRunning = false;

                    // Add a random query string to the image source url to
                    // force a reload.
                    var time = new Date().getTime().toString();
                    this.existingImageSrc = String.prototype.concat(this.existingImageSrc, '&cb=', time);
                });
            });
    }
}
