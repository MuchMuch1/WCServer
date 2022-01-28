var http = require('http');

var server = http.createServer(function(req, res){

    if (req.url == "/"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html><title>Welcome to the website</title><body><h1>Welcome to the home page</h1><p>This is the home page.</p></body></html>");
        res.end();
    }
    else if (req.url == "/student"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html><title>This is the student page</title><body><p>This is the student page.</p></body></html>");
        res.end();
    }
    else if (req.url == "/admin"){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<html><title>Hello, admin</title><body><h1>Admin Page</h1><p>This is the admin page.</p></body></html>");
        res.end();
    }

    else
    res.end("Invalid Request.")
})

server.listen(4000);
console.log("nodeJS localhost at port 4000 is running...");