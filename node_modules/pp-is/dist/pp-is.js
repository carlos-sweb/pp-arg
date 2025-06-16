/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.2.7 (2025/06/11 21:30 PM)
 * Released under the MIT License
 */ 
import isPromise from "./main/isPromise.js"
import isString from "./main/isString.js"
import isBlank from "./main/isBlank.js"
import isArray from "./main/isArray.js"
import isObject from "./main/isObject.js"
import isRegExp from "./main/isRegExp.js"
import isBoolean from "./main/isBoolean.js"
import isDate from "./main/isDate.js"
import isFunction from "./main/isFunction.js"
import isUndefined from "./main/isUndefined.js"
import isNull from "./main/isNull.js"
import isNil from "./main/isNil.js"
import isNaN from "./main/isNaN.js"
import isNumber from "./main/isNumber.js"
import isEmail from "./main/isEmail.js"
import isUrl from "./main/isUrl.js"
import isEmpty from "./main/isEmpty.js"
import isNodeList from "./main/isNodeList.js"
import isElement from "./main/isElement.js"
import isHTMLCollection from "./main/isHTMLCollection.js"
import base from "./helper/base.js" 
/** 
 * @description - Obtains the object to be exported with the following main functions
 * @name is
 * @type {object}   
 * @property {function} isArray - {@link isArray}
 * @property {function} isBoolean - {@link isBoolean}
 * @property {function} isDate - {@link isDate}
 * @property {function} isElement - {@link isElement}
 * @property {function} isEmpty - {@link isEmpty}
 * @property {function} isFunction - {@link isFunction}
 * @property {function} isNull - {@link isNull}
 * @property {function} isNumber - {@link isNumber}
 * @property {function} isString - {@link isString}
 * @property {function} isUndefined - {@link isUndefined}
 * @property {function} isEmail - {@link isEmail}
 * @property {function} isNaN - {@link isNaN}
 * @property {function} isRegExp - {@link isRegExp}
 * @property {function} isUrl - {@link isUrl}
 * @property {function} isNodeList - {@link isNodeList}
 * @property {function} isHTMLCollection - {@link isHTMLCollection}
 * @property {function} isAMD - {@link isAMD}
 * @property {function} isFreeModule - {@link isFreeModule}
 * @property {function} getRoot - {@link getRoot}
 */
  const is = {      
      'isArray':base(isArray),
      'isBoolean':base(isBoolean),
      'isDate':base(isDate),
      'isElement':base(isElement),
      'isEmpty':base(isEmpty),
      'isBlank':base(isBlank),
      'isFunction':base(isFunction),
      'isNull':base(isNull),
      'isNumber':base(isNumber),
      'isObject':base(isObject),
      'isString':base(isString),
      'isUndefined':base(isUndefined),
      'isNil':base(isNil),
      'isEmail':base(isEmail),
      'isNaN':base(isNaN),
      'isRegExp':base(isRegExp),
      'isUrl':base(isUrl),
      'isNodeList':base(isNodeList),
      'isHTMLCollection':base(isHTMLCollection),      
      'isPromise':base(isPromise)
  }  

 export { is as default }