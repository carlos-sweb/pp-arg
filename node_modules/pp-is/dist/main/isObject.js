import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isObject
* @description - Checks if value is classified as an Object.
* @param { Any } value - Any value
* @return {boolean}
*/
const isObject=(value)=>getTypeCompare(value,'Object')
export { isObject as default }
