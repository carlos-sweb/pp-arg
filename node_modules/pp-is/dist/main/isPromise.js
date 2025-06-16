import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isPromise
* @description - Checks if value is classified as an Promise object.
* @param { Any } value - Any Value
* @return {boolean}
*/
const isPromise = (value)=> getTypeCompare(value,"Promise")
export { isPromise as default }