# random-integral

> Return a random integer.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-integral/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-integral/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-integral)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-integral/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-integral)


## Install

```
$ npm install --save random-integral
```


## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-integral/blob/master/test/spec/index.js)


```js
var randomInt = require('random-integral');

// API
// - randomInt()
// - randomInt(max)
// - randomInt(min, max)

randomInt();
// => randomInt(-9007199254740991, 9007199254740991);
// => -1293235

randomInt(5);
// => randomInt(-9007199254740991, 5);
// => -33569

randomInt(10, 100);
// => 66

randomInt(-100, -10);
// => -57
```

These `min` and `max` are **inclusive**, so they are included in the range.

This means `randomInt(-2, 2)` would return either `-2`, `-1`, `0`, `1`, or `2`.


## Related




## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-integral/issues/new).
