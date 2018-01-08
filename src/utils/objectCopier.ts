/**
 * @namespace toolkit.utils
 */

/**
 * @class toolkit.utils.ObjectCopier
 * @classdesc Copies object properties from one object to another.
 */
export class ObjectCopier {

    /**
     * copies object properties from one object to another.
     */
    public static copyObject<T>(copyFrom: T, copyTo: T): T {

        for (var key in copyFrom) {
            if (copyFrom.hasOwnProperty(key)) {

                try {
                    copyTo[key] = copyFrom[key];
                } catch (err) {
                    // could be getter
                }

            }
        }

        return copyTo;
    }
}