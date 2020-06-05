```
// Interactive
for await (const input of readStdin()) {
    console.log(input)
}
const [ a, b, c ] = await readMany(3)

// Non-interactive
for (const input of stdinIter()) console.log(input)
const [ a, b, c ] = readMany(3)
```

[interactive](https://raw.githubusercontent.com/comame/nodejs-stdin-reader/master/interactive.min.js)
[non-interactive](https://raw.githubusercontent.com/comame/nodejs-stdin-reader/master/noninteractive.min.js)
