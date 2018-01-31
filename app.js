
// se incluyen las dependencias que vamos a utilizar
var express = require("express"); // Expresss maneja las llamadas HTTP
var app = express();
var bodyParser  = require("body-parser"); // Lo utilizamos para parsear los JSON
var methodOverride = require("method-override"); //implementamos los metodos HTTP
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


//var router = express.Router();

app.get('/', function(req, res){
    res.send("Pagina de incio");
});

app.get('/switches', function(req, res) {
    res.send("switches");
    MongoClient.connect('mongodb://172.17.0.3/switches', function(err, client){
        if(err){
            console.log('ERROR: connecting to DB. '+ err);
        }
            console.log("Connected to DB");
            db = client.db('switches');
    });
});
app.listen(8081, function() {
console.log("Server listenig at http://localhost:8081");
});