import isBoolean from "./../main/isBoolean.js"
/**
* @function baseSanetize
* @description - Trabajar Aqui
* @param { function } doneOrReject - Custom function that is triggered when the positive hook or negative hook is defined by the user. This function can resolve true or false independent of the first evaluation or it can simply do nothing.
* @param { Any } value - The value to evaluate 
* @param { boolean } evaluate - pre evaulate from static function isString,isUndefined,..etc
* @return { boolean } - evaluate 
*/
const baseSanetize = ( doneOrReject , value , evaluate )=> {    
  const response = doneOrReject(value);
  return isBoolean( response ) ? response : evaluate;
}
export { baseSanetize as default }