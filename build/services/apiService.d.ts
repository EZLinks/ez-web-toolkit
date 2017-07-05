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
    request(opts: RequestOptions): Promise<any | void>;
}
export interface IApiService {
    /**
     * Execute an api request and, after some error checking, return a promise
     * to the response body.
     * @param {string} method - The http method.
     * @param {string} url - The url to http.
     * @param {any} data - (Optional) The request data.
     * @returns {Promise<any>} A promise to the response body.
     */
    req(method: string, url: string, data?: any): any;
    /**
     * Execute an api request and, after some error checking, return a promise
     * to the response body.
     */
    request(opts: RequestOptions): Promise<any | void>;
    /**
     * Uploads file to server.
     *
     * @param {string} method - The http method.
     * @param {string} url - The url to http.
     * @param {any} file - The file needed to be uploaded.
     * @param {any} data - (Optional) The request data.
     * @returns {Promise<any>} A promise to the response body.
     */
    upload(method: string, url: any, file: any, data?: any): Promise<any>;
}
