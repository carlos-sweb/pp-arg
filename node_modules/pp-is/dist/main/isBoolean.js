import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isBoolean
* @description - Checks if value is either true or false.
* @param { Any } value - Any value
* @return {boolean}
*/
const isBoolean=(value)=>value === true || value === false || getTypeCompare(value,'Boolean')
export { isBoolean as default }

