// Import the built-in 'path' module in Node.js
const path = require('path');

// Log the system-specific path separator ("/" for macOS/Linux, "\" for Windows)
console.log(path.sep); 

// Create a file path by joining directory names and file name
const filePath = path.join('/content', 'subfolder', 'text.txt');
console.log(filePath); // Output: '/content/subfolder/text.txt' (Linux/macOS) or '\content\subfolder\text.txt' (Windows)

// Extract and log only the file name from the full path
const base = path.basename(filePath);
console.log(base); // Output: 'text.txt'

// Get the absolute path (full path from the root directory)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute); // Output will be the full path like '/Users/yourname/project/content/subfolder/text.txt' (Linux/macOS) or 'C:\Users\yourname\project\content\subfolder\text.txt' (Windows)
