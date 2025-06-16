import getType from "./getType.js"
/**
* @function getTypeCompare
* @description - 
* @param {Any} value - Any Value
* @param {string} expression - Expression to compare
* 
*/
const getTypeCompare = (value,expression)=>(getType(value) === "[object "+expression+"]")
export { getTypeCompare as default }