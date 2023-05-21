var http = require('http');
var fs = require ('fs');
let data ="Hello Node";
http.createServer(function (req,res){
    fs.writeFile("Welcome.txt", data,(err)=>{

        if(err)
        console.log(err);
        else{
            console.log("File welcome.txt wtitten successfully !");
            console.log(data);
        }
    });
    res.write('<h1> Hello Node!!!!<h1>\n'); //write a response to the client
    res.end(); //end the response

}) .listen(3000);