# number-system
This library will help you convert between different number system

A Node.js library for converting between different number systems.

## Usage

```
let NumberObject = require("number-system");

var number = new NumberObject(50, 'DECIMAL');
console.log(number.getNumber('HEX')); // 32
console.log(number.getNumber('BINARY')); // 110010
```

## Installation

To use number-system in your Node.js code base, run:
```
npm install number-system --save
```