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
                yield buffer
                buffer = ''
            } else {
                buffer += char
            }
        }
        if (buffer.length != 0) yield buffer
    }
}

async function readMany(number) {
    const iter = this._iter = (this._iter || readStdin())
    const inputs = []
    for (let i = 0; i < number; i += 1) {
        inputs.push((await iter.next()).value)
    }
    return inputs
}

module.exports = { readStdin, readMany }
