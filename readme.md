# create-eslint-index [![Build Status](https://travis-ci.org/jfmengels/create-eslint-index.svg?branch=master)](https://travis-ci.org/jfmengels/create-eslint-index) [![Coverage Status](https://coveralls.io/repos/github/jfmengels/create-eslint-index/badge.svg?branch=master)](https://coveralls.io/github/jfmengels/create-eslint-index?branch=master)

> Simplify the creation an index file for your ESLint plugin


## Install

```
$ npm install --save create-eslint-index
```


## Usage

```js
const createEslintIndex = require('create-eslint-index');

createEslintIndex('unicorns');
//=> 'unicorns & rainbows'
```


## API

### createEslintIndex(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

MIT © [Jeroen Engels](https://github.com/jfmengels)
