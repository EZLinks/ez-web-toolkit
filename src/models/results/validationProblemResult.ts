import { ProblemResult } from './problemResult';

/**
 * validaiton problem result.
 */
export class ValidationProblemResult extends ProblemResult {

    /**
     * errors field.
     */
    public errors: Map<string, string[]>;
}