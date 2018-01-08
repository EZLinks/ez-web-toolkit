/**
 * @namespace toolkit.models
 */
import { ProblemResult } from './problemResult';
/**
* @class toolkit.models.ValidationProblemResult
* @classdesc The validation problem result.
*/
export declare class ValidationProblemResult extends ProblemResult {
    /**
     * errors field.
     */
    errors: Map<string, string[]>;
}
