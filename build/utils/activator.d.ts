/**
 * activator class.
 *
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
