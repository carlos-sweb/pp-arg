import baseEvaluate from "./baseEvaluate.js"
/**
* @function base
* @description - This function stretches to baseEvaluate passing as parameter the function that specifically evaluates the given value to be evaluated, but in the baseEvaluate function it arrives as a parameter called func
* @param {function} func - Evaluative function
* @return {function} - function to execute baseEvaluate
* @example 
* const hello = "hello Word!";
* const evaluate = base(isString)(hello)
* //return true
*/
const base = ( func ) => ( value ,done , reject) => baseEvaluate( func , value , done , reject)
export { base as default }
