//Name:     Chadle Rei Miclat
//App name: server.js

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//Create application/x-www-form-urlencoded-parser
var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static("public"));
app.get('/index.html', function(req, res){
    res.sendFile(__dirname +"/" +"index.html");
})

app.post("/process_post", urlencodedParser, function(req, res){
    //Prepare output in JSON format
    response = {
        fName:req.body.fName,
        lName:req.body.lName,
        course:req.body.course,
        age:req.body.age,
        comments:req.body.comments
    };
    console.log(response);
    res.send(JSON.stringify(response));
})

var server = app.listen(2002, "localhost", function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Server is running at http://%s:%s", host, port);
})