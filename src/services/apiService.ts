/**
 * @namespace toolkit.services
 */
 
import * as angular from 'angular';

import { IResponseHandlers } from './handlers/responseHandlers';
import { RequestOptions } from '../models/http/requestOptions';

export class ApiService implements IApiService {

    static $inject = [
        '$http',
        'responseHandlers'
    ];
    constructor(private $http: ng.IHttpService, private responseHandlers: IResponseHandlers) {
    }

    public req(method: string, url: string, data?: any) {
        var opts = new RequestOptions(url, method);
        opts.headers = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };

        if (data) {
            opts.data = data;
        }
        return this.request(opts);
    }

    public upload(method: string, url: any, file: any, data?: any): Promise<any> {

        let opts = new RequestOptions(url, method);

        opts.headers = {
            // NOTE: Content type must be undefined for this to work. It is set
            // automagically.
            'Content-Type': undefined
        };

        if (data) {
            opts.data = data;
        }

        // transforms request data to the form data request with key/value pairs
        opts.transformRequest = (requestData, headersGetter) => {

            var formData = new FormData();

            if (requestData) {

                angular.forEach(requestData,
                    (value, key) => {
                        formData.append(key, value);
                    });
            }

            formData.append('file', file);

            return formData;
        };

        return this.request(opts);
    }

    public urlEncoded(method: string, url: any, data: any): Promise<any> {

        let opts = new RequestOptions(url, method);

        opts.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };

        if (data) {
            opts.data = data;
        }

        // transforms request data to the form data request with key/value pairs
        opts.transformRequest = (requestData, headersGetter) => {

            let dataStr: string = '';

            if (requestData) {

                angular.forEach(requestData,
                    (value, key) => {

                        if (dataStr) {
                            dataStr += '&';
                        }

                        dataStr += `${key}=${encodeURIComponent(value)}`;
                    });
            }

            return dataStr;
        };

        return this.request(opts);
    }

    public request(opts: RequestOptions): Promise<any | void> {

        let ngPromise = this.$http(opts)
            .catch((err) => {

                // If a response was received and it contains some useful information.
                if (err.data) {
                    this.responseHandlers.handleProblem(err.data, opts.rethrow);
                }
                // Otherwise, just throw a generic error.
                else {
                    this.responseHandlers.error(opts.rethrow);
                }
            })
            // Return response json data.
            .then((res: any) => {
                // Need to check if res is defined.
                if (res) {
                    return res.data;
                }
            });

        return Promise.resolve(ngPromise);
    }

}

/**
 * @interface
 * @class toolkit.services.IApiService
 * @classdesc The common service for requesting server.
 */
export interface IApiService {

    /**
     * Execute an api request and, after some error checking, return a promise
     * to the response body.
     * @method toolkit.services.IApiService#req
     * @param {string} method - The http method.
     * @param {string} url - The url to http.
     * @param {any} data - (Optional) The request data.
     * @returns {Promise<any>} A promise to the response body.
     */
    req(method: string, url: string, data?: any);

    /**
     * Execute an api request and, after some error checking, return a promise
     * to the response body.
     * @method toolkit.services.IApiService#request
     */
    request(opts: RequestOptions) : Promise<any|void>;

    /**
     * Uploads file to server.
     * @method toolkit.services.IApiService#upload
     * @param {string} method - The http method.
     * @param {string} url - The url to http.
     * @param {any} file - The file needed to be uploaded.
     * @param {any} data - (Optional) The request data.
     * @returns {Promise<any>} A promise to the response body.
     */
    upload(method: string, url: any, file: any, data?: any): Promise<any>;

    /**
     * Executes a url encoded http request.
     * @method toolkit.services.IApiService#urlEncoded
     * @param {string} method - The http method.
     * @param {string} url - The url to http.
     * @param {any} data - The request data.
     * @returns {Promise<any>} A promise to the response body.
     */
    urlEncoded(method: string, url: any, data: any): Promise<any>
}
