## nodered-msg-converter [![Build Status](https://travis-ci.org/maxleiko/nodered-msg-converter.svg)](https://travis-ci.org/maxleiko/nodered-msg-converter) [![npm version](https://img.shields.io/npm/v/nodered-msg-converter.svg)](https://img.shields.io/npm/v/nodered-msg-converter.svg)

```sh
npm i nodered-msg-converter --save
```

Utility module to convert almost any input to a "clean" **Node-RED** message.
```js
var noderedMsgConverter = require('nodered-msg-converter');

var msg;

// for strings
msg = noderedMsgConverter('hello');
// => { payload: 'hello' }

// for number
msg = noderedMsgConverter(42);
// => { payload: 42 }

// for arrays
msg = noderedMsgConverter(['foo', 'bar']);
// => { payload: "['foo', 'bar']" }

// for objects
msg = noderedMsgConverter({ an: 'object' });
// => { payload: '{an: "object"}' }

// for already defined nodered messages
msg = noderedMsgConverter({ topic: 'foo', payload: 'yolo' });
// => { topic: 'foo', payload: 'yolo' }
```
