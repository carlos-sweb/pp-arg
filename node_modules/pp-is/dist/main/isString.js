import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isString
* @description - Checks if value is a string.
* @param { Any } value - Any value
* @return {boolean}
*/
const isString = (value)=> getTypeCompare(value,"String")
export { isString as default }
