'use strict'

const mongoose = require('mongoose')

const ReservaSchema = new mongoose.Schema ({
    Idbicicleta: {type: String, default:""},
    Idusuario: String,
    Idsucursal: {type: String, default:""},
    Fechaini: String,
    Fechafin: String,
    Seguro: {type: Boolean, default: false},
    Idseguro: {type: String, default: ""}
})

module.exports = mongoose.model('Reserva', ReservaSchema)