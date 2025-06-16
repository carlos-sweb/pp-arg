/**
* @function isHTMLCollection
* @description - Checks if value is a valid HTMLCollection.
* @param { Any } value - Any Value
* @return {boolean}
*/
const isHTMLCollection=(value)=>(typeof HTMLCollection === "undefined" ? false : HTMLCollection.prototype.isPrototypeOf(value))  
export { isHTMLCollection as default }