'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


const Bicicleta = require('../models/Bicicleta')
const Reserva = require('../models/reserva')
const Usuario = require('../models/usuario')



function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}


//var tipobici = "la bicicleta elegida en el html"
//var dias = "Cantidad de dias ingreso en el html por la q resevara la bicicleta "

//POST
app.post('/Reservar',(req,res)=>{

	var IDBici=""
	var IDsucur=""

	Bicicleta.find({Tipo: "Trek marlin 5", Disponible:"Si"}, (err, productos)=>{  //<= aca va la variable tipobici en ves del string

		var seleccionada = productos[0]
    	IDBici=seleccionada._id
    	IDsucur=seleccionada.Idsucursal
    	let now = new Date()

    	let fin = new Date()
    	sumarDias(fin, 2); //<= aca va la variable dias en ves del numero

    	let reser = new Reserva()
		reser.Idbicicleta = IDBici
		reser.Idusuario = req.body.Idusuario
		reser.Idsucursal = IDsucur
		reser.Fechaini = now
		reser.Fechafin = fin
		reser.Seguro = req.body.Seguro

		reser.save((err, Reservaguardada)=>{
			if(err) res.status(500).send({message:'Error al guardar reserva en la base de datos'})
			res.status(200).send({reservas: Reservaguardada})
		})


		Bicicleta.findByIdAndUpdate(IDBici,{Disponible:"No"},(err, productoActualizado)=>{
			if(err) res.status(500).send({message:'Error al actualizar Bicicleta'})

		})

	});

})




module.exports = app;