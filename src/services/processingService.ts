/**
 * A service responsible for indicating processing of operations on pages (not refreshing data).
 *
 * @returns {Object}
 */
// ReSharper disable once InconsistentNaming
export class ProcessingService {

    /**
     * Whether or not to show the text of the overlay.
     */
    private show: boolean = false;

    /**
     * The text to display.
     */
    private text: string;

    get showOverlay(): boolean {
        return this.show;
    }

    set showOverlay(val: boolean) {
        this.show = val;
        if (!this.show) {
            this.text = null;
        }
    }

    showOverlayIndicator(message) {
        this.text = message;
        this.showOverlay = true;
    }

    hideOverlayIndicator() {
        this.showOverlay = false;
    }

    // NOTE: These are dirty but they are the most efficient way to show or hide
    // the loading indicator without relying on a digest.
    showPartialLoadingIndicator(id) {
        $('#' + id).removeClass('hidden');
    }

    hidePartialLoadingIndicator(id) {
        $('#' + id).addClass('hidden');
    }
}

export interface IProcessingService {

    /**
     * Displays a message for the application's loading indicator.
     *
     * @param {String} message The user-friendly text to display below the loading indicator.
     */
    showOverlayIndicator(message);

    /**
     * Hides the application's loading indicator.
     */
    hideOverlayIndicator();

    showPartialLoadingIndicator(id);

    hidePartialLoadingIndicator(id);
}
