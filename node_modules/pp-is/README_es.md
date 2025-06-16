# pp-is

## Para empezar

Incluye pp-is.js en tu proyecto web:
```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.2.5/pp-is.min.js" ></script>
```

O

## Instalación

```console
npm i pp-is --save
```
## Metodos

#### `isArray`

Verifica si el valor es clasificado como un Objecto de Array.

---
#### `isBoolean`

Verifica si el valor is verdadero ( true ) o falso ( false ).

---
#### `isDate`

Verifica si el valor es una Fecha.

---
#### `isElement`

verifica si el valor es un elemento del DOM


---
#### `isFunction`

Verifica si el valor es una función

---
#### `isNull`

Verifica si el valor es un nulo.

---
#### `isNil`

Verifica si el valor es un nulo o no definido.

---
#### `isNumber`

Verifica si el valor es un numero.

---
#### `isObject`

verifica si el valor es clasificado como un objecto.

---
#### `isString`

Varifica si el valor es una cadena de texto.

---
#### `isUndefined`

verifica si el valor esta no definido.

---
#### `isEmail`

Verifica si el valor es un correo electronico valido.

---

---
#### `isNaN`

Verifica si el valor es un numero valido proveniente de una cadena de texto.

---

---
#### `isRegExp`

Verifica si el valor es una expresion regular

---

---
#### `isUrl`

Verifica si el valor es una url valida.

---

#### `isNodeList`

Verifica si el valor es un NodeList valido.

---

#### `isHTMLCollection`

Verifica si el valor es un HTTMLCollection valido.

---

#### `isEmpty`

Verifica que un valor no este vacio , en caso de una cadena que sea distinta a "" , en caso de un arreglo que sea distinoto a [] y un objecto que sea distinto a {}

---

#### `isBlank`

Comprueba que un valor esté en blanco, lo cual ocurre cuando una cadena no está vacía, sino que está llena de espacios en blanco.

---

#### `isPromise`

Comprueba si el valor está clasificado como un objeto Promise.

---

## ¿ Como se usa ?

```javascript

var value = "string...";

if( ppIs.isString(value) ){
  // Ingresa tu codigo aqui
}
```

### or



```javascript
// Puedes hacer una evaluación extra
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

[Read this document in English](./README.md)