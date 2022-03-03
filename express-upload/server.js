//Name:     Chadle Rei Miclat
//App name: server.js

//Initialization
var express = require("express");
var multer = require("multer");
var app = express();

//Multer Setup to act as a helper/middleware
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
       callback(null, './uploads'); 
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); 
    }
});

var upload = multer({storage: storage}).single("myfile");

//Send File
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//Error Handling
app.post("/uploaded", function(req, res){
    upload(req, res, function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File uploaded successfully.")
    });
});

app.listen(2003, function(){
    console.log("Server is running on port 2003");
})