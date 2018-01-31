# Servidor NodeJS utilizando Express
Para el *sprint 1* es necesario crear un servidor utilizando nodejs y express.

**express** es un framework de Node.js que facilita la creación y manejo de las llamadas HTTP.

Primero importamos las dependencias necesarias que vamos a utilizar para nuestra aplicación e instanciamos el objeto app que contiene los metodos Request HTTP GET, POST, PUT, DELETE.

```javascript
var express = require("express"); 
var app = express();
```

En este caso de forma adicional al CA utilizamos la dependecia necearia para interactuar con la base de datos mongoDB utilizando el driver **mongod**

```javascript
var MongoClient = require('mongodb').MongoClient;
```
Con la instancia de **express** ***app*** que hemos creado, podemos manejar el ruteo de nuestra aplicación, para que responda a determinados recursos cuando sean requeridos, la sintaxis para el ruteo es la siguiete

```javascript
app.METHOD(PATH,HANDLER)
```

    Donde:
    -app es la instancia de express.
    -METHOD son los request HTTP
    -PATH es la URL del recurso
    -HANDLER es la función que se ejecuta cuando se solicita el recurso.

En el siguietne link pueden encontrar [documentación de express sobre routing](http://expressjs.com/en/starter/basic-routing.html "Express routing page") 

En nuestro caso tenemos dos recursos: *raiz* y *switches*.

Cuando se realiza el request a la *raíz*, se ejecuta la función que devuelve "Pagina de incio" en la variable res (response). Esta función ejecuta de esa forma se conoce como un callback. 

```javascript
app.get('/', function(req, res){
    res.send("Pagina de incio");
});
```
Para culminar nuestro servidor con el metodo *listen*, se abre el puerto que se indique en el llamado para escuchar por las conexiones.

```javascript
app.listen(8081, function() {
console.log("Server listenig at http://localhost:8081");
});
```
En nuetro caso el servidor espera por conexiones en el puerto **8081**. Adicionalmente pasamos como parametro una función que imprima en la consola que nuestro server esta escuchando. En este punto ya tenemos un servidor listo para recibir conexiones.

Para completar el Criterio de aceptación del *sprint1* agregamos el recurso *switches*. De forma adicional establecemos comunicación con la base de datos, que se encuentra corriendo de forma local.

```javascript
app.get('/switches', function(req, res) {
    res.send("switches");
   //Conexión a la base de datos
   MongoClient.connect('mongodb://172.17.0.3/switches', function(err, client){
        if(err){
            console.log('ERROR: connecting to DB. '+ err);
        }
            console.log("Connected to DB");
            db = client.db('switches');
    });
});
```
