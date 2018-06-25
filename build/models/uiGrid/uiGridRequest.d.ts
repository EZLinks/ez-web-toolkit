/**
 * @namespace toolkit.models
 */
/**
* @class toolkit.models.UiGridRequest
* @classdesc Request with filterin for angular ui grid.
*/
export declare class UiGridRequest {
    /**
     * page number
     */
    page: number;
    /**
     * page size number.
     */
    pageSize: number;
    /**
     * the sort request.
     */
    sort: SortRequest;
    /**
     * filters.
     */
    filters: Array<FilterRequest>;
}
/**
 * sort request model.
 */
export declare class SortRequest {
    /**
     * sort direction.
     */
    direction: string;
    /**
     * sort member.
     */
    memberName: string;
}
/**
 * filter request.
 */
export declare class FilterRequest {
    /**
     * member name.
     */
    memberName: string;
    /**
     * filter value.
     */
    value: string;
    /**
     * the filter condition.
     */
    condition: number;
}
