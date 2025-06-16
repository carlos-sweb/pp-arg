/**
* @function isNodeList
* @description - Checks if value is a valid NodeList.
* @param { Any } value - Any Value
* @return {boolean}
*/
const isNodeList=(value)=>(typeof NodeList === "undefined" ? false : NodeList.prototype.isPrototypeOf(value))
export { isNodeList as default}      