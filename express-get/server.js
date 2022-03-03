//Name:     Chadle Rei Miclat
//App name: server.js

var express = require("express");
var app = express();

app.use(express.static("public"));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname +"/" +"index.html");
})

app.get("/process_get", function(req, res){
    //Prepare output in JSON format
    response = {
        fName:req.query.fName,
        lName:req.query.lName,
        course:req.query.course,
        age:req.query.age,
        comments:req.query.comments
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

var server = app.listen(2001, "localhost", function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server is running at http://%s:%s", host, port);
})