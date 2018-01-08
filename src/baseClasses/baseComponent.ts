/**
 * @namespace toolkit.baseClasses
 */

import * as _ from 'lodash';

export class BaseComponent {

    /**
     * Array of watch callbacks which would be unwatched on scope destroy.
     * @member {Array<Function>} toolkit.baseClasses.BaseComponent#unwatchArray
     */
    public unwatchArray: Array<Function>;
    private destroy: () => void;

    /**
     * @class toolkit.baseClasses.BaseComponent
     * @classdesc Automatically handles the scope destroy callbacks and watches.
     * @param {ng.IScope} $scope Scope of the component.
     * @param {Function} additionalDestruction Callback which would be called on scope destroy.
     */
    constructor($scope: ng.IScope, additionalDestruction?: Function) {
        this.unwatchArray = new Array<Function>();

        this.destroy = () => {
            if (this.unwatchArray) {
                _.forEach(this.unwatchArray, (unwatch) => {
                    unwatch();
                });
            }
            if (additionalDestruction) {
                additionalDestruction();
            }
        };

        $scope.$on('$destroy', this.destroy);
    }
}