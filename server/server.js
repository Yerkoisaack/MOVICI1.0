require('./config/config');


const express = require('express');
const mongoose = require('mongoose'); //importo moongoose para mongodb
const path = require('path'); //para publicar la carpeta public


const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser'); // Permite decodificar informacion enviada por x-www-form...
require('./hbs/helpers');
const { verificaToken, verificaAdminRole } = require('./middlewares/autenticacion');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());




//habilitar carpeta public

app.use(express.static(path.resolve(__dirname, '../public'))); //expongo la carpeta a publica, path.resolve, une los argumentos
hbs.registerPartials(path.resolve(__dirname + '/views/parciales'));
app.set('view engine', 'hbs');
app.use(require('./routes/index'));

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Yerko Sanhueza goDOY',

    });
});
app.get('/login', (req, res) => {


    res.render('login', {
        nombre: 'Yerko Sanhueza goDOY',

    });
});
app.get('/dashboard', (req, res) => {

    let nombre = req.query.Nombre || 0; //recibo una variable desde la url: {{url}}/usuario?desde=1
    console.log(nombre);
    let token = req.query.token || 0; //recibo una variable desde la url: {{url}}/usuario?desde=1
    console.log(token);
    let email = req.query.email || 0; //recibo una variable desde la url: {{url}}/usuario?desde=1
    console.log(email);
    let telefono = req.query.telefono || 0; //recibo una variable desde la url: {{url}}/usuario?desde=1
    console.log(telefono);

    res.render('dashboard', {
        nombre: nombre,

    });
});
app.get('/register', (req, res) => {

    res.render('register', {
        nombre: 'Yerko Sanhueza goDOY',

    });
});




mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos online!');


});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`);
});