/**
 * A service responsible for indicating processing of operations on pages (not refreshing data).
 *
 * @returns {Object}
 */
export declare class ProcessingService {
    /**
     * Whether or not to show the text of the overlay.
     */
    private show;
    /**
     * The text to display.
     */
    private text;
    showOverlay: boolean;
    showOverlayIndicator(message: any): void;
    hideOverlayIndicator(): void;
    showPartialLoadingIndicator(id: any): void;
    hidePartialLoadingIndicator(id: any): void;
}
export interface IProcessingService {
    /**
     * Displays a message for the application's loading indicator.
     *
     * @param {String} message The user-friendly text to display below the loading indicator.
     */
    showOverlayIndicator(message: any): any;
    /**
     * Hides the application's loading indicator.
     */
    hideOverlayIndicator(): any;
    showPartialLoadingIndicator(id: any): any;
    hidePartialLoadingIndicator(id: any): any;
}
