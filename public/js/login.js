async function iniciar() {
    let failledes = document.getElementById('divCorreo');
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    $.ajax({
            // En data puedes utilizar un objeto JSON, un array o un query string
            data: { "email": email, "password": password },
            //Cambiar a type: POST si necesario
            type: "POST",
            // Formato de datos que se espera en la respuesta
            dataType: "json",
            // URL a la que se enviará la solicitud Ajax
            url: "/logini",
        })
        .done(function(data, textStatus, jqXHR) {

            renderizar(data.usuario, data.token);
        }).fail(function(jqXHR, textStatus, errorThrown) {

            failledes.style.display = "block";

        });
}

function renderizar(usuario, token) {
    $.ajax({
        url: "/dashboard",
        type: 'GET',
        data: { "email": usuario.email },
        // Fetch the stored token from localStorage and set in the header
        // headers: { "token": data.token }
    }).done(function(data, textStatus, jqXHR) {
        location.href = "/dashboard?token=" + token + "&" + "Nombre=" + usuario.nombre + "&" + "email=" + usuario.email + "&" + "telefono=" + usuario.telefono;
    })

    //     
    // }).fail(function(jqXHR, textStatus, errorThrown) {
    //     alert('Incorrecta llamada');
    // });
}