/// <reference types="angular" />
import { IResponseHandlers } from './handlers/responseHandlers';
import { RequestOptions } from '../models/http/requestOptions';
export declare class ApiService implements IApiService {
    private $http;
    private responseHandlers;
    static $inject: string[];
    constructor($http: ng.IHttpService, responseHandlers: IResponseHandlers);
    req(method: string, url: string, data?: any): Promise<any>;
    upload(method: string, url: any, file: any, data?: any): Promise<any>;
    urlEncoded(method: string, url: any, data: any): Promise<any>;
    request(opts: RequestOptions): Promise<any | void>;
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
    req(method: string, url: string, data?: any): any;
    /**
     * Execute an api request and, after some error checking, return a promise
     * to the response body.
     * @method toolkit.services.IApiService#request
     */
    request(opts: RequestOptions): Promise<any | void>;
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
    urlEncoded(method: string, url: any, data: any): Promise<any>;
}
