# readable-seconds

Package to convert seconds into a readable format.

## Install

```javascript
$ npm install readableSeconds
```

## Usage

```javascript
const timeString = require("readable-seconds");

console.log(timeString(3690)); // 1 hour, 1 minute and 30 seconds
```

### Using optional second argument to limit the number of units returned

```javascript
console.log(timeString(3690, 2)); // 1 hour and 1 minute
```
