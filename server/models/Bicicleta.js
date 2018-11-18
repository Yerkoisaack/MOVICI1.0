'use strict'

const mongoose = require('mongoose')

const BiciSchema = new mongoose.Schema ({
    Tipo: {type: String, enum:['Trek marlin 5', 'Trek marlin 6', 'Trek marlin 7','Trek marlin 5a','Trek marlin 5b',]},
    Idsucursal: String,
    Disponible: String
})

module.exports = mongoose.model('Bicicleta', BiciSchema)