const { readFile, writeFile } = require('fs');

// Read the first file
readFile('./content/subfolder/first.txt', 'utf-8', (err, firstResult) => {
    if (err) {
        console.log('Error reading first file:', err);
        return;
    }
    
    // Read the second file
    readFile('./content/subfolder/second.txt', 'utf-8', (err, secondResult) => {
        if (err) {
            console.log('Error reading second file:', err);
            return;
        }

        // Concatenate the results and write them to a new file
        const resultContent = `Here is the result: ${firstResult}, ${secondResult}`;
        writeFile('./content/subfolder/result-sync.txt', resultContent, { flag: 'a' }, (err) => {
            if (err) {
                console.log('Error writing to file:', err);
                return;
            }
            console.log('Successfully wrote to result-sync.txt');
        });
    });
});
