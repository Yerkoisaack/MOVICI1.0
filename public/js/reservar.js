var URLsearch = window.location.search;
var url = URLsearch;
usuario = datosUsuario(url);
console.log(usuario);
console.log("bicicleta = " + usuario.bicicleta);
//location.href = "/arriendos?token=" + usuario.token + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;
const bicigeneral = usuario.bicicleta;
const nombregeneral = usuario.nombre;
const idusuariogeneral = usuario.id;

$('#codigo').append(usuario.bicicleta);

$.ajax({
        // En data puedes utilizar un objeto JSON, un array o un query string
        data: { "Bicicleta": usuario.bicicleta },
        //Cambiar a type: POST si necesario
        type: "POST",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: "/DatosBicicleta",
    })
    .done(function(data, textStatus, jqXHR) {

        console.log(data.productos[0].Tipo);
        $('#modelo').append(data.productos[0].Tipo);
        $('#precio').append(data.productos[0].valor);






    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("no entra")
        console.log(jqXHR);
        console.log("salto");
        console.log(textStatus);
        console.log("salto");
        console.log(errorThrown);
        console.log("salto");
        alert('falla hacer el login')
            //alert('Incorrecta llamada');
    });


function datosUsuario(url) {
    url = url.replace('?', '');
    elementos = url.split("&");
    var datos = []


    for (i = 0; i < elementos.length; i++) {
        var dupla = elementos[i].split('=');
        datos.push(dupla)
    }

    var usuario = parseJwt(datos[0][1]);
    //console.log(usuario);
    return devuelta = {
        nombre: usuario.usuario.nombre,
        email: usuario.usuario.email,
        telefono: usuario.usuario.telefono,
        id: usuario.usuario._id,
        bicicleta: datos[1][1],
        token: datos[0][1]
    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};

function ConfirmarReserva() {
    console.log(bicigeneral);
    console.log(nombregeneral);
    console.log(idusuariogeneral);
    alert('entra');

    $.ajax({
            // En data puedes utilizar un objeto JSON, un array o un query string
            data: { "IdBicicleta": bicigeneral, "IdUsuario": idusuariogeneral },
            //Cambiar a type: POST si necesario
            type: "POST",
            // Formato de datos que se espera en la respuesta
            dataType: "json",
            // URL a la que se enviará la solicitud Ajax
            url: "/Reservar2",
        })
        .done(function(data, textStatus, jqXHR) {
            console.log('Reservado');







        }).fail(function(jqXHR, textStatus, errorThrown) {
            alert("no entra")
            console.log(jqXHR);
            console.log("salto");
            console.log(textStatus);
            console.log("salto");
            console.log(errorThrown);
            console.log("salto");
            alert('falla hacer el login')
                //alert('Incorrecta llamada');
        });
}