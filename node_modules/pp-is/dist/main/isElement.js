/**
* @function isElement
* @description - isElement
* @param { Any } value - Any value
* @return {boolean}
*/
const isElement=(value)=>!!( value && value.nodeType === 1 )
export { isElement as default }