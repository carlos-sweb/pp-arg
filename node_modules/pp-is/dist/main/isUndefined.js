import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isUndefined
* @description - Checks if value is a undefined.
* @param { Any } value - Any value
* @return {boolean}
*/
const isUndefined=(value)=>getTypeCompare(value,'Undefined')
export { isUndefined as default }
