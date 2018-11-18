'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './server/images/');
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})


const uploud = multer({ storage: storage })



const Bicicleta = require('../models/Bicicleta')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Post

app.post('/agregar/bicicletas', uploud.single('bicimage'), (req, res) => {
    console.log('POST /agregar/bicicletas')
    console.log(req.body)
    console.log(req.file)

    let bici = new Bicicleta()
    bici.Tipo = req.body.Tipo
    bici.estado = req.body.estado
    bici.Idsucursal = req.body.Idsucursal
    bici.valor = req.body.valor


    bici.save((err, Bicicletasguardada) => {
        if (err) res.status(500).send({ message: 'Error al guardar en la base de datos' })
        res.status(200).send({ bicicletas: Bicicletasguardada })
    })
})

module.exports = app;