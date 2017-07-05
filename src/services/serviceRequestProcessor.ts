/**
 * the service request processor.
 */
export class ServiceRequestProcessor {

    public isRequestRunning: boolean;

    public isErrorOccured: boolean;

    constructor(
        private $timeout: any,
        private request: () => Promise<any>,
        private handleCallback: (any) => void) {
    }

    public process(): void {

        if (this.isRequestRunning) {
            return;
        }

        this.isRequestRunning = true;

        this.request().then((res) => {
            this.handleCallback(res);
        })
            .catch(() => {
                this.$timeout(() => {
                    this.isErrorOccured = true;
                });
            })
            .then(() => {
                this.$timeout(() => {
                    this.isRequestRunning = false;
                });
            });
    }
}