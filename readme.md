# spaten-parser

**Parse [Spaten-encoded geodata](https://thomas.skowron.eu/spaten/).**

[![npm version](https://img.shields.io/npm/v/spaten-parser.svg)](https://www.npmjs.com/package/spaten-parser)
[![build status](https://api.travis-ci.org/derhuerst/spaten-parser.svg?branch=master)](https://travis-ci.org/derhuerst/spaten-parser)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/spaten-parser.svg)
![minimum Node.js version](https://img.shields.io/node/v/spaten-parser.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)


## Installation

```shell
npm install spaten-parser
```


## Usage

```js
const {readFileSync} = require('fs')
const parse = require('spaten-parser')

const buf = readFileSync('path/to/file.spaten')

for (const item of parse(buf)) {
	console.log(item)
}
```

`parse` is a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*), so it returns an [iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterator).


## Contributing

If you have a question or need support using `spaten-parser`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/spaten-parser/issues).
