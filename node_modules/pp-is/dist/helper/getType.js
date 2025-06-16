/**   
* @function getType
* @description - Gets the type name
* @param {Any} value - Value to check
* @returns {string}
* @example
* const s = 'Hello Word';
* console.log(getType(s))
* // [object String]
*/
const getType = (value)=>Object.prototype.toString.call(value)
export { getType as default }