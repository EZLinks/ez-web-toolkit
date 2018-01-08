/**
 * @namespace toolkit.utils
 */

/**
 * @class toolkit.utils.Activator
 * @classdesc Creates instances of provided class types.
 */
export class Activator {

    /**
     * creates instance of some type.
     * 
     * @param type
     */
    public static createInstance<T>(type: { new (): T; }): T {
        return new type();
    }
}