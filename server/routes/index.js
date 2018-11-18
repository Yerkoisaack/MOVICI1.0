const express = require('express');

const app = express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./stock'));
app.use(require('./Catalogo'));
app.use(require('./Reservar'));


module.exports = app;