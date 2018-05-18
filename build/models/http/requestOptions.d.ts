/**
 * @namespace toolkit.models
 */
/**
* @class toolkit.models.RequestOptions
* @classdesc The request options to be passed to the api service request function.
*/
export declare class RequestOptions {
    constructor(url: string, method: string, baseUrl?: string);
    /**
     * The http method.
     */
    method: string;
    /**
     * The url.
     */
    url: string;
    /**
     * The query parameters to append to the request url.
     * @example { id: 3 }
     */
    params: any;
    /**
     * The data to be sent.
     */
    data: any;
    /**
     * Any additional headers to add to the request.
     * @example { Content-Type: "image/png" }
     */
    headers: any;
    /**
     * Whether or not to make an unauthorized request.
     */
    unauthorized: boolean;
    /**
     * Whether or not to rethrow any error encountered.
     */
    rethrow: boolean;
    /**
     * Whether to hide error message.
     */
    hideErrorMessage: boolean;
    /**
     * The transform request option.
     */
    transformRequest: any;
}
