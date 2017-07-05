import * as _ from 'lodash';

export class BaseComponent {
    public unwatchArray: Array<Function>;
    public destroy: () => void;

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
