# pp-is

## Getting Started

In the web project include pp-is.js with:

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.2.5/pp-is.min.js" ></script>
```

Or

## Install

```console
npm i pp-is --save
```
## Methods

#### `isArray`

Checks if value is classified as an Array object.

---
#### `isBoolean`

Checks if value is either true or false.

---
#### `isDate`

Checks if value is a Date

---
#### `isElement`

Checks if value is a DOM element.

---
#### `isFunction`

Checks if value is a Function.

---
#### `isNull`

Checks if value is a Null.

---
#### `isNil`

Checks if value is a Null or Undefined

---
#### `isNumber`

Checks if value is a Number.

---
#### `isObject`

Checks if value is classified as an Object.

---
#### `isString`

Checks if value is a string.

---
#### `isUndefined`

Checks if value is a undefined.

---
#### `isEmail`

Checks if value is a valid email.

---

---
#### `isNaN`

Checks if value is a valid Number from String.

---

---
#### `isRegExp`

Checks if value is a RegExp.

---

---
#### `isUrl`

Checks if value is a valid Url.

---

#### `isNodeList`

Checks if value is a valid NodeList.

---

#### `isHTMLCollection`

Checks if value is a valid HTMLCollection.

---

#### `isEmpty`

Verify that a value is not empty, in the case of a string that is not “” , in the case of an array that is not \[\] and an object that is not {}.

---

#### `isBlank`

Check that a value is blank, which is when a string is not empty but filled with blank spaces.

---

#### `isPromise`

Checks if value is classified as an Promise object.

---

## How to use ?

```javascript

var value = "string...";

if( ppIs.isString(value) ){
  // Enter your code here
}
```

### or



```javascript
// You can make an extra evaluation
const done = ( value ) => {  
  return value !== 'string';
}

const reject = ( value ) => {
  
}

const value = 'string';

const result = ppIs.isString( value , done , reject );

if( result ){

}else{

}

```

[Lea este documento en español](./README_es.md)
