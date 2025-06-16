import isString from "./isString.js"
import isArray from "./isArray.js"
import isObject from "./isObject.js"
/**
 * @function isEmpty
 * @description - Verify that a value is not empty, in the case of a string that is not “” , in the case of an array that is not [] and an object that is not {}.
 * @param { Any } value - Any value
 * @example
 * // this a empty string
 * is.isEmpty("")
 * // return true
 * @example
 * // this a empty array
 * is.isEmpty([])
 * // return true
 * @example
 * // this a empty Object
 * is.isEmpty({})
 * // return true
 * @return {boolean}
 */
const isEmpty=(value)=>{
      if(isString(value)){return value === ""}
      else if(isArray(value)){return value.length == 0}
      else if(isObject(value)){return Object.keys(value).length === 0}
      return true;
}
export { isEmpty as default }