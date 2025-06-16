import isUndefined from "./isUndefined.js"
import isNull from "./isNull.js"
/**
* @function isNil
* @description - Check that a value is undefined or null
* @param { Any } value - Any Value
* @return {boolean}
*/

const isNil = (value)=>isUndefined(value)||isNull(value)
export { isNil as default }