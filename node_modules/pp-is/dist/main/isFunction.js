import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isFunction
* @description - Checks if value is a Function.
* @param { Any } value - Any value
* @return {boolean}
*/
const isFunction=(value) =>getTypeCompare(value,'Function')
export { isFunction as default }

