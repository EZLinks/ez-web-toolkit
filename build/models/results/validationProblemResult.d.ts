import { ProblemResult } from './problemResult';
/**
 * validaiton problem result.
 */
export declare class ValidationProblemResult extends ProblemResult {
    /**
     * errors field.
     */
    errors: Map<string, string[]>;
}
