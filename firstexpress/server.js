//Name: Chadle Rei Miclat
//App name: server.js

var express = require("Express");

var app = express();

app.get('/', function(req, res){
    res.send("Successfully created the second app");
});

var server = app.listen(1002, 'localhost', function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server is running at http://%s:%s", host, port);
})