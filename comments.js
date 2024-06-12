// Create a web server
const express = require('express');
const app = express();
// Create a port
const port = 3000;

// Get the path
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get the comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Post the comments
app.post('/comments', (req, res) => {
    res.send('Post Comments');
});

// Put the comments
app.put('/comments', (req, res) => {
    res.send('Put Comments');
});

// Delete the comments
app.delete('/comments', (req, res) => {
    res.send('Delete Comments');
});

// Listen to the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Run the server
// node comments.js
// Open the browser and type localhost:3000