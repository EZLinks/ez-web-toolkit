/**
 * the grid request model.
 */
export class UiGridRequest {
    /**
     * page number
     */
    public page: number;

    /**
     * page size number.
     */
    public pageSize: number;

    /**
     * the sort request.
     */
    public sort: SortRequest;

    /**
     * filters.
     */
    public filters: Array<FilterRequest>;
}

/**
 * sort request model.
 */
export class SortRequest {

    /**
     * sort direction.
     */
    public direction: string;

    /**
     * sort member.
     */
    public memberName: string;
}

/**
 * filter request.
 */
export class FilterRequest {
    /**
     * member name.
     */
    public memberName: string; 
    /**
     * filter value.
     */
	public value: string;

    /**
     * the filter condition.
     */
    public condition: number;
}