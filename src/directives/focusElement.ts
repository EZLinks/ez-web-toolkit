/**
 * @namespace toolkit.directives
 */
 
 /**
 * @class toolkit.directives.FocusElement
 * @classdesc Makes a focus on element while loaded.
 */
export class FocusElement implements ng.IDirective {
    
        public restrict: string = 'A';

        constructor(private $timeout: ng.ITimeoutService) {
        }

        /**
         * creates a factory for directive
         */
        public static factory(): ng.IDirectiveFactory {
            const directive = ($timeout: ng.ITimeoutService) => new FocusElement($timeout);
            directive.$inject = ['$timeout'];
            return directive;
        }
    
        /**
         * link for directive.
         *
         * @param scope
         * @param element
         * @param attrs
         * @param ctrl
         */
        public link(scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
    
            this.$timeout(() => {
                element[0].focus();
            });
        }
}