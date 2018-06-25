/**
 * the service request processor.
 */
export declare class ServiceRequestProcessor {
    private $timeout;
    private request;
    private handleCallback;
    isRequestRunning: boolean;
    isErrorOccured: boolean;
    constructor($timeout: any, request: () => Promise<any>, handleCallback: (any) => void);
    process(): void;
}
