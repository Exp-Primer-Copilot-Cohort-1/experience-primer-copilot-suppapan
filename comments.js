// Create web server 
// 1. Load http module
var http = require('http');
// 2. Create http server
var server = http.createServer(function(req, resp) {
    // 3. Set the content type
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    // 4. Send the response body
    resp.end('<h1>Hello World</h1>');
});
// 5. Make the server listen on port 3000
server.listen(3000);
console.log('Server running at http://localhost:3000/');

// 6. Open the browser and type http://localhost:3000/ in the address bar
// 7. Press Ctrl + C to stop the server