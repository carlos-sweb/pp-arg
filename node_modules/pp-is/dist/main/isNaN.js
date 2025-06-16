/**
* @function isNaN
* @description - Checks if value is a valid Number from String.
* @param { Any } value - Any Value      
* @return {boolean}
*/
const isNaN = ( value )=>(Number.isNaN( Number.parseInt(value)))
export { isNaN as default }
