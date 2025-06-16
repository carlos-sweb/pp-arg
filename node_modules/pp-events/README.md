## Getting Started

In the web project include pp-events.js with:

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@latest/pp-is.min.js" ></script>
<script src="https://cdn.jsdelivr.net/npm/pp-events@latest/pp-events.min.js" ></script>
```

Or

## Install

```console
npm i pp-events --save
```

## Initialize

### Nodejs

```javascript

var ppEvents = require("pp-events")

var Event = ppEvents() // Or new ppEvents()

```

### RequireJS

```javascript
// in data-main script file
requirejs.config({    
    baseUrl:"node_modules/",
    paths: {
        "pp-is": "pp-is/pp-is.min",
        "pp-events":"pp-events/pp-events"
    }
});
// in your main js file
require(["config"],function(){
	require(["pp-events"],function(ppEvents){
		const Event = ppEvents(); // or new events();
	});
})

```

### Browser Javascript

```javascript

var Event = ppEvents() // Or new ppEvents()

//say hello function for execute
var sayHello = function( msg ){
	console.log(msg)
}

Event.on("sayHello",sayHello)

Event.emit("sayHello","Hi everyone !!!!!")

// remove Events if will be necesary

Event.removeListener("sayHello",sayHello);

```

### QuickJs Engine

```javascript
// nd = No dependencies, pp-events only uses some functions from pp-is that are already included.
import "./dist/pp-events.nd.min.js"

var Event = ppEvents() // Or new ppEvents()

//say hello function for execute
var sayHello = function( msg ){
	console.log(msg)
}

Event.on("sayHello",sayHello)

Event.emit("sayHello","Hi everyone !!!!!")

// remove Events if will be necesary

Event.removeListener("sayHello",sayHello);
```

## Methods

### `on`

```javascript
Event.on("eventName",myFunction);
```
---

### `emit`
```javascript
Event.emit("eventName",{
	mydata:"myvalue",
	otherData:"otherValue"
});
```
---

### `checkOn`
```javascript
Event.checkOn("eventName");
```
---

### `removeListener`
```javascript
Event.removeListener("eventName",myFunction);
```
