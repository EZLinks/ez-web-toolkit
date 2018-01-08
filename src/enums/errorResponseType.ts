/**
 * @namespace toolkit.enums
 */
 
 /**
 * @class toolkit.enums.ErrorResponseType
 * @classdesc An error reponses.
 */
export enum ErrorResponseType {

    /**
     * The connection lost.
     * @member {number} toolkit.enums.ErrorResponseType#ConnectionLost
     */     
    ConnectionLost,

    /**
     * The result has a problem.
     * @member {number} toolkit.enums.ErrorResponseType#ProblemResult
     */         
    ProblemResult,

    /**
     * The result has validation problem.
     * @member {number} toolkit.enums.ErrorResponseType#ValidationProblemResult
     */             
    ValidationProblemResult
}
