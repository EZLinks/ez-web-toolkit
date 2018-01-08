/**
 * @namespace toolkit.models
 */
 
 /**
 * @class toolkit.models.UiGridResult<T>
 * @classdesc The result of angular ui grid request.
 */
export class UiGridResult<T> {
    /**
     * The data returned to the grid.
     */
    public data: Array<T>;

    /**
     * The totel number of items the result can return.
     */
    public totalItems: number;

    public length: number;
}
