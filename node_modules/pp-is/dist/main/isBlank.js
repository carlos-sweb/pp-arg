import isString from "./isString.js"
/**
* @function isBlack
* @description - Check that a value is blank, which is when a string is not empty but filled with blank spaces.
* @param { Any } value - Any Value
* @return {boolean}
*/

const isBlank = (value)=>isString(value) ? ( value === "" || value.trim() === "" ) : false
export { isBlank as default }