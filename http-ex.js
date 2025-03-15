var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    // Specify the file path
    const filePath = './content/subfolder/big.txt';

    // Create a readable stream
    const fileStream = fs.createReadStream(filePath, 'utf-8');

    // Handle when the file is successfully opened
    fileStream.on('open', function() {
        // Pipe the file stream to the response (this sends the content to the browser)
        fileStream.pipe(res);
    });

    // Handle errors during the file read process
    fileStream.on('error', function(err) {
        res.end('Error reading the file: ' + err.message);
    });
}).listen(5000, () => {
    console.log('Server is running on port 5000');
});
