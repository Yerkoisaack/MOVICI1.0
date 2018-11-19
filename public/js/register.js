function registrar() {

    let nombre = document.getElementById('Nombre').value;

    let telefono = document.getElementById('Telefono').value;
    let correo = document.getElementById('Email').value;
    let contrasena1 = document.getElementById('Contrasena1').value;
    let contrasena2 = document.getElementById('Contrasena2').value;
    let cajacontrasena = document.getElementById('myDiv');
    let cajacorreo = document.getElementById('divCorreo');
    let cajacreado = document.getElementById('divCreado');
    let desaparece = document.getElementById('desaparece');

    let cajacampo = document.getElementById('divCampo');


    if (nombre === '' || telefono === '' || correo === '' || contrasena1 === '' || contrasena2 === '') {
        cajacampo.style.display = "block";
        return 1;
    }
    let datoshtml = [nombre, telefono, correo, contrasena1];






    if (contrasena1 === contrasena2) {
        $.ajax({
                // En data puedes utilizar un objeto JSON, un array o un query string
                data: { "nombre": nombre, "telefono": telefono, "correo": correo, "password": contrasena1 },
                //Cambiar a type: POST si necesario
                type: "POST",
                // Formato de datos que se espera en la respuesta
                dataType: "json",
                // URL a la que se enviará la solicitud Ajax
                url: "/usuario1",
            })
            .done(function(data, textStatus, jqXHR) {

                cajacampo.style.display = "none";
                cajacorreo.style.display = "none";
                cajacontrasena.style.display = "none";
                cajacreado.style.display = "block";


            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.log('fallo usuario');
                cajacorreo.style.display = "block";



            });

    } else {
        cajacontrasena.style.display = "block";

    }









}