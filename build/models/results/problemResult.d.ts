import { HttpStatusCode } from '../../enums/httpStatusCode';
/**
 * problem result
 */
export declare class ProblemResult {
    /**
     * error detail
     */
    detail: string;
    /**
     * instance url
     */
    instance: string;
    /**
     * error status code
     */
    status: HttpStatusCode;
    /**
     * error title
     */
    title: string;
    /**
     * error type
     */
    type: string;
}
