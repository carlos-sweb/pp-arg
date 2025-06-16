import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isNull
* @description - Checks if value is a Null.
* @param { Any } value - Any value
* @return {boolean}
*/
const isNull=(value)=>getTypeCompare(value,'Null')
export { isNull as default }
