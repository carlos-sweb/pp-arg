import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isArray
* @description - Checks if value is classified as an Array object.
* @param { Any } value - Any Value
* @return {boolean}
*/
const isArray = (value)=> getTypeCompare(value,"Array")
export { isArray as default }