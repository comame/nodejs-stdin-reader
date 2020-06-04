```
for await (const input of readStdin()) {
    console.log(input)
}
const [ a, b, c ] = await readMany(3)

const iter = readStdin()
await readMany(0, iter)
```

[minified](https://raw.githubusercontent.com/comame/nodejs-stdin-reader/master/main.min.js)
