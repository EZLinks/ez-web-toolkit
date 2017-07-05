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
