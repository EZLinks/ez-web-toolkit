/**
 * @namespace toolkit.components
 */

export class ColorPicker implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.templateUrl = require('ngtemplate-loader!html-loader!./colorPicker.html');
        this.controller = ColorPickerController;
        this.controllerAs = 'cp';
        this.bindings = {
            color: '=color',
            text: '<?text'
        };
    }
}

export class ColorPickerController {
    public color: string;
    public text: string;

    $onInit() {
        if (this.text === undefined || this.text === null || this.text.length === 0) {
            this.text = 'Pick a color';
        }
    }
}
