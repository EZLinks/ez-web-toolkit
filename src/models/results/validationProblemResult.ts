/**
 * @namespace toolkit.models
 */

import { ProblemResult } from './problemResult';
 
 /**
 * @class toolkit.models.ValidationProblemResult
 * @classdesc The validation problem result.
 */
export class ValidationProblemResult extends ProblemResult {

    /**
     * errors field.
     */
    public errors: Map<string, string[]>;
}