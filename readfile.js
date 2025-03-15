const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt', 'utf-8');
const second = readFileSync('./content/subfolder/second.txt', 'utf-8');

console.log(first)
console.log(second)


writeFileSync(
    './content/subfolder/result-sync.txt',`Here is the result: ${first}${second}`,
    {flag : 'a'}
)