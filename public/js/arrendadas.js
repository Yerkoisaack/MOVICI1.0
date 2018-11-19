alert('entra');
var URLsearch = window.location.search;
var url = URLsearch;
usuario = datosUsuario(url);
console.log(usuario.id);

$.ajax({
        // En data puedes utilizar un objeto JSON, un array o un query string
        data: { iduser: usuario.id },
        //Cambiar a type: POST si necesario
        type: "POST",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: "/misreservas",
    })
    .done(function(data, textStatus, jqXHR) {

        console.log(data);

        //resivo las cletas y las tengo que mostrar en el arriendos.hbs

        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa
        //acaaaaaaaaaaaaaaaaaaaa

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
        token: datos[0][1]
    }
}

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
};