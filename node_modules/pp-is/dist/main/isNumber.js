import getTypeCompare from "./../helper/getTypeCompare.js"
import isNaN from "./isNaN.js"
/**
* @function isNumber
* @description - Checks if value is a Number.
* @param { Any } value - Any value
* @return {boolean}
*/
const isNumber=(value)=>getTypeCompare(value,'Number') && !isNaN(value)
export { isNumber as default }

