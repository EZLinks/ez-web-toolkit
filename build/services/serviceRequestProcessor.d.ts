/**
 * @namespace toolkit.services
 */
/**
* @class toolkit.services.ServiceRequestProcessor
* @classdesc Handles loading indication in requests automatically.
*/
export declare class ServiceRequestProcessor {
    private $timeout;
    private request;
    private handleCallback;
    isRequestRunning: boolean;
    isErrorOccured: boolean;
    constructor($timeout: any, request: () => Promise<any>, handleCallback: (any: any) => void);
    process(): void;
}
