// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const port = 3000; // You can use any port number you prefer

// Define a route for the root endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
