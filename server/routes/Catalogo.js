'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const Bicicleta = require('../models/Bicicleta')

//GET

app.get('/CatalogoDisponible', (req, res) => {
    Bicicleta.find({ estado: true }, (err, productos) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la petición' })
        if (!productos) return res.status(484).send({ message: 'No existe el producto' })
        res.send(200, { productos })
        console.log(productos.length)

    });

});
app.get('/Catalogo/marlin5', (req, res) => {
    Bicicleta.find({ Tipo: 'Trek marlin 5' }, (err, productos) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la petición' })
        if (!productos) return res.status(484).send({ message: 'No existe el producto' })
        res.send(200, { productos })
        console.log(productos.length)

    });
})

app.get('/Catalogo/marlin6', (req, res) => {
    Bicicleta.find({ Tipo: 'Trek marlin 6' }, (err, productos) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la petición' })
        if (!productos) return res.status(484).send({ message: 'No existe el producto' })
        res.send(200, { productos })
        console.log(productos.length)

    });
})

app.get('/Catalogo/marlin7', (req, res) => {
    Bicicleta.find({ Tipo: 'Trek marlin 7' }, (err, productos) => {
        if (err) return res.status(500).send({ message: 'Error al realizar la petición' })
        if (!productos) return res.status(484).send({ message: 'No existe el producto' })
        res.send(200, { productos })
        console.log(productos.length)

    });
})




module.exports = app;