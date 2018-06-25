/**
 * @namespace toolkit.models
 */
/**
* @class toolkit.models.UiGridResult<T>
* @classdesc The result of angular ui grid request.
*/
export declare class UiGridResult<T> {
    /**
     * The data returned to the grid.
     */
    data: Array<T>;
    /**
     * The totel number of items the result can return.
     */
    totalItems: number;
    length: number;
}
