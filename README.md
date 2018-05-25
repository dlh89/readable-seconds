# readable-seconds

Package to convert seconds into a readable format.

## Install

```javascript
$ npm install readable-seconds --save
```

## Usage

### Basic Usage

If a second argument is not provided then it will return all units.

```javascript
const readableSeconds = require("readable-seconds");

console.log(readableSeconds(3690)); // 1 hour, 1 minute and 30 seconds
```

### Using optional second argument to limit the number of units returned

An optional second argument can be used to limit the maximum number of units returned.

```javascript
console.log(readableSeconds(3690, 2)); // 1 hour and 1 minute
```

## Features

This module converts seconds into years, days, hours, minutes and seconds. A human-readable string is returned. Units with values of 0 are omitted and all the values returned are followed by the relevant unit type which will be appropriately singular or plural depending on the value. The units are separated by commas if there are more than 2 and the last value is preceded by the word "and".

An optional second argument can be provided to limit the number of units returned to the 2 largest units. This can be useful when dealing with large numbers of units where the smaller units are of less significance, as in the following example:

```javascript
console.log(readableSeconds(31622490)); // 1 year, 1 day, 1 minute and 30 seconds
console.log(readableSeconds(31622490, 2)); // 1 year and 1 day
```
