const http = require('http');
let server = http.createServer(function (req, res) {
    const urlData = req.url
    res.writeHead(200, { "Content-type": "text/json" });
    if (urlData == "/contact") {
        res.end(JSON.stringify({
           
                phone: '18602100000',
                email: 'guestcaredominos@jublfood.com'
            
        }))
    }
    else if (urlData == "/welcome") {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.end("Welcome to Dominos!")

    }
    else{
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("Error 404 page not found")
    }
});

server.listen(8081, () => console.log("The server is running on port 8081")); 