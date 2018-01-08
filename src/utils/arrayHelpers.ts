/**
 * @namespace toolkit.utils
 */

/**
 * @class toolkit.utils.ArrayHelper
 * @classdesc Methods for helping deal with arrays.
 */
export class ArrayHelper {
    /**
     * Create an array of the given length. The array will start at 1 instead of 0
     * 
     * @param {number} length 
     */
    public static createArray(length: number) {
        if (isNaN(length) || length <= 0) {
            throw new Error(`Unable to create an array with the length of ${length}`);
        }

        let array: Array<number> = new Array<number>();

        for (let x = 1; x <= length; x++) {
            array.push(x);
        }

        return array;
    }
}