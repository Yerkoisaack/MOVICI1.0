function RutaMiPerfil() {

    var URLsearch = window.location.search;
    var url = URLsearch;
    usuario = datosUsuario(url);
    console.log(usuario);
    location.href = "/dashboard?token=" + usuario.token + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;
}

function RutaMiCatalogo() {

    var URLsearch = window.location.search;
    var url = URLsearch;
    usuario = datosUsuario(url);
    console.log(usuario);
    location.href = "/catalogo?token=" + usuario.token + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;
}

function RutaMiArriendo() {
    var URLsearch = window.location.search;
    var url = URLsearch;
    usuario = datosUsuario(url);
    console.log(usuario);
    location.href = "/arriendos?token=" + usuario.token + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;


}

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