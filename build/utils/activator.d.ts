/**
 * @namespace toolkit.utils
 */
/**
 * @class toolkit.utils.Activator
 * @classdesc Creates instances of provided class types.
 */
export declare class Activator {
    /**
     * creates instance of some type.
     *
     * @param type
     */
    static createInstance<T>(type: {
        new (): T;
    }): T;
}
