import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isDate
* @description - isDate
* @param { Any } value - Any value
* @return {boolean}
*/
const isDate=(value)=>getTypeCompare(value,'Date')
export { isDate as default }