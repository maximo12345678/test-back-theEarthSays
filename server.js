// importaciones
const express = require('express');
const routes = require('./route'); //traemos lo que exporte el archivo ROUTE.JS, las rutas que creemos.
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');

const app = express(); //ejecutamos express

const configDataBase = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'test'
};

app.use(cors({origin: 'http://localhost:3000'})); //para darle permiso al servidor de react donde consumo las Apis.


app.use(myconn(mysql, configDataBase, 'single')); //para la conexion a la base de datos. 


app.set('port', process.env.PORT || 9000); //process es una variable de ambiente, es util cuando ya el hosting te da un puerto que podes usar, sino usa el 9000


app.use(express.json()); //para que la app o el servidor logre entender lo que viene por la peticion (post, get, put, delete), en json.



app.get('/', (req, res) => { //recibe un requerimiento y una respuesta como parametro.
    res.send("Ruta principal.");
})


app.use('/api', routes); //hacemos que el link del servidor web sea 'localhost:9000/api'



app.listen(app.get('port'), () => { //corremos el servidor - GET accede a la config de la app que creamos.
    console.log("Server corriendo en el puerto: ", app.get('port'));
})

