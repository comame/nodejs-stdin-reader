async function* readStdin() {
    const stdinAsyncIterable = {
        [Symbol.asyncIterator]() {
            return {
                next() {
                    process.stdin.resume().setEncoding('utf-8')
                    return new Promise(resolve => {
                        process.stdin.once('data', chunk => {
                            resolve({ value: chunk, done: false })
                        })
                    })
                }
            }
        }
    }

    for await (const line of stdinAsyncIterable) {
        let buffer = ''
        for (const char of line) {
            if (char == ' ' || char == '\n') {
                if (buffer.length != 0) yield buffer
                buffer = ''
            } else {
                buffer += char
            }
        }
        if (buffer.length != 0) yield buffer
    }
}

async function readMany(number, iter = void 0) {
    const _iter = iter || (this._iter = (this._iter || readStdin()))
    const inputs = []
    for (let i = 0; i < number; i += 1) {
        inputs.push((await _iter.next()).value)
    }
    return inputs
}

module.exports = { readStdin, readMany }
