import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isRegExp
* @description - Checks if value is a RegExp.
* @param { Any } value - Any value
* @return {boolean}
*/
const isRegExp = (value)=> getTypeCompare(value,"RegExp")
export { isRegExp as default }