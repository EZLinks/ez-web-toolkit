/**
 * @namespace toolkit.models
 */
 
 /**
 * @class toolkit.models.RequestOptions
 * @classdesc The request options to be passed to the api service request function.
 */
export class RequestOptions {

    // TODO: Reverse order of url, string params.
    constructor(url: string, method: string, baseUrl: string = './') {
        
        this.url = baseUrl.concat(url);
        this.method = method;
        this.rethrow = true;
    }

    /**
     * The http method.
     */
    public method: string;

    /**
     * The url.
     */
    public url: string;

    /**
     * The query parameters to append to the request url.
     * @example { id: 3 }
     */
    public params: any;

    /**
     * The data to be sent.
     */
    public data: any;

    /**
     * Any additional headers to add to the request.
     * @example { Content-Type: "image/png" }
     */
    public headers: any;

    /**
     * Whether or not to make an unauthorized request.
     */
    public unauthorized: boolean;

    /**
     * Whether or not to rethrow any error encountered.
     */
    public rethrow: boolean;

    /**
     * The transform request option.
     */
    public transformRequest: any;
}
