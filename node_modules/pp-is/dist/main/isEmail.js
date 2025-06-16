/**
* @function isEmail
* @description - Checks if value is a valid email.
* @param { Any } value - Any Value
* @example
* is.isEmail("h@blog.mydomian.xyz")
* // return true
* @return {boolean}
*/
const isEmail = ( value )=>/^([a-z1-9\._-]+)@([a-z0-9-]+\.[a-z]{2,11}|[a-z0-9]+\.[a-z]{2,24}\.[a-z]{2,24})$/i.test( value )
export { isEmail as default }