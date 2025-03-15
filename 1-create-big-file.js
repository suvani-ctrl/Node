const {writeFileSync} = require ('fs')
for (let i = 0; i<1000; i++)
{
    writeFileSync('./content/subfolder/big.txt', `hello suvani ${i}\n`, {flag: 'a'})
}