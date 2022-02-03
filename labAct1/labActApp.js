var http = require('http');
var name = "James Bond"

var server = http.createServer(function(req, res){

    if (req.url == "/"){
        var rootModule = require("./root.js");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(rootModule.root(name));
        res.end();
        console.log("root.js Started")
    }
    else if (req.url == "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        var aboutModule = require("./about.js");
        console.log("about.js Started")
        res.write(aboutModule.about(name));
        res.end();
    }
    else if (req.url == "/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        var contactModule = require("./contact.js");
        console.log("contact.js Started")
        res.write(contactModule.contact(name));
        res.end();
    }
    else if (req.url == "/gallery"){
        res.writeHead(200, {"Content-Type": "text/html"});
        var galleryModule = require("./gallery.js");
        console.log("gallery.js Started")
        res.write(galleryModule.gallery(name));
        res.end();
    }

    else
    res.end("Invalid Request.")
})

server.listen(2000);
console.log("nodeJS localhost at port 2000 is running...");

// Miclat, Chadle Rei M.    WD-201  2/2/2022