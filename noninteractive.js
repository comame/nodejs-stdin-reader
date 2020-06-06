'use strict'

function* stdinIter() {
    const stdin = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split(/\n|\s/)
    yield* stdin
}

let _iter
function readMany(n, iter) {
    _iter = iter || _iter || stdinIter()
    const res = []
    for (let i = 0; i < n; i += 1) res.push(_iter.next().value)
    return res
}
