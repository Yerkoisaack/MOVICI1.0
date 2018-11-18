let cajita = document.getElementById('MostarBici');
$.ajax({
        // En data puedes utilizar un objeto JSON, un array o un query string

        //Cambiar a type: POST si necesario
        type: "GET",
        // Formato de datos que se espera en la respuesta
        dataType: "json",
        // URL a la que se enviará la solicitud Ajax
        url: "/CatalogoDisponible",
    })
    .done(function(data, textStatus, jqXHR) {

        cajita.innerHTML = '';
        var URLsearch = window.location.search;
        var url = URLsearch;
        usuario = datosUsuario(url);



        for (i = 0; i < data.productos.length; i++) {
            var rutita = "/pedido?token=" + usuario.token + "&" + "Bicicleta=" + data.productos[i]._id + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;

            $('#MostarBici').append('<div class="single-products-catagory clearfix"><a href="' + rutita + '"><img src="img/bg-img/marlin5a.jpg" alt=""><div class="hover-content"><div class="line"></div><p>' + data.productos[i].Tipo + ' $' + data.productos[i].valor + ' el día</p><h4>Discos de Freno </h4></div><p>Codigo Bicicleta: ' + data.productos[i]._id + '</p><p>Sucursal: ' + data.productos[i].Idsucursal + '</p></a></div>');
            console.log(data.productos[i].Tipo);
            console.log(data.productos[i]._id);
            console.log(data.productos[i].Idsucursal);
            console.log(data.productos[i].valor);
        }


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