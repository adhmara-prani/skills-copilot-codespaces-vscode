// Create a web server
// Load the 'http' module
var http = require('http');

// Create a web server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<html><body>' +
        '<h1>Comments</h1>' +
        '<form method="post" action="/comments">' +
        '<textarea name="comment" rows="4" cols="50"></textarea><br>' +
        '<input type="submit" value="Submit">' +
        '</form>' +
        '</body></html>');
    response.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/comments');