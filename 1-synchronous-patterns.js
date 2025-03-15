const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page!');
    } else if (req.url === '/about') {
        // Non-blocking alternative using setTimeout
        setTimeout(() => {
            res.end("About Page! (Handled asynchronously)");
        }, 1000); // Simulate a delay without blocking
    } else {
        res.end("Error: Page not found");
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
