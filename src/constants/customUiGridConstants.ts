/**
 * @namespace toolkit.constants
 */

 /**
 * @class toolkit.constants.CustomUiGridConstants
 * @classdesc An angular ui-grid constants.
 */
export class CustomUiGridConstants {
    static get Default(): any {
        return {
            debounceDelay: 400,
            headerCellTemplate: require('ngtemplate-loader!html-loader!../templates/ui-grid/ui-grid-search-header.html'),
            filterHeaderTemplate: require('ngtemplate-loader!html-loader!../templates/ui-grid/ui-grid-filter.html'),
            cellTemplate: require('ngtemplate-loader!html-loader!../templates/ui-grid/ui-grid-centered-cell.html')
        };
    }
}
