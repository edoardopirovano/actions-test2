const g = require('globby')
const f = require('fast-glob')
console.log(g.sync(['a','a/**'])) // [ 'a/b', './a/b' ]
console.log(f.sync(['a','a/**'])) // [ './a/b' ]
