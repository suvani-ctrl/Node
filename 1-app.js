const { readFile,writeFile } = require('fs');


const util = require('util');
const readFilePromise  = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

// Using the function correctly with the provided path
getText('./content/subfolder/first.txt')
    .then(result => console.log(result))
    .catch(err => console.log(err));

///async and await

// const start = async () => {
//     try {
//         const first = await getText('./content/subfolder/first.txt');
//         console.log(first);
//     } catch (error) {
//         console.log(error);  // You can log the error if something goes wrong
//     }
// }

// start();

const start = async() =>
{
    try{
            const first = await getText('./content/subfolder/first.txt');
            const second = await getText('./content/subfolder/second.txt');
            await writeFilePromise('./content/result-mind-generate.txt', `This is awsome: ${first} ${second}`)
            console.log(first,second);
    }
    catch(err)
    {
        console.log(err)
    }
}

start()