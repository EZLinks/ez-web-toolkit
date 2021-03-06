/**
 * @namespace toolkit.models
 */
 
import { HttpStatusCode } from '../../enums/httpStatusCode';

/**
 * @class toolkit.models.ProblemResult
 * @classdesc The problem result.
 */
export class ProblemResult {

    /**
     * error detail
     */
    public detail: string;

    /**
     * instance url
     */
    public instance: string;

    /**
     * error status code
     */
    public status: HttpStatusCode;

    /**
     * error title
     */
    public title: string;

    /**
     * error type
     */
    public type: string;
}
