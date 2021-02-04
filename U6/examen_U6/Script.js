let xhr = new XMLHttpRequest();
let Json = "";
let jsonTabla = "";
let selector = document.getElementById('seleccionable').value;

document.getElementById("xmlenviar").addEventListener('click', () => {

    if (xhr.responseText === "") {
        xhr.open("GET", "insertar_comunidades.php", true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                Json = Json.parse(xhr.responseText);
                tabla(Json);
            }
        }
        xhr.send(null);
    } else {
        tabla();
    }

});

document.getElementById("modificar").addEventListener("click", function () {

    fetch('actualizar_comunidad.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'objeto=' + JSON.stringify(obtenerObjeto())
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            if (result == "ok") {
                document.getElementById("datosweb").innerHTML = "<p>Comunidad Actualizada </p>";
                tabla(jsonTabla);
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });

});


function obtenerObjeto() {
    let objetoEnviado = {
        selector: document.getElementById("seleccionable").value,
        dentregadas: parseInt(document.getElementById("dentregadas").value),
        dadmin: parseInt(document.getElementById("dadmin").value),
        dcompleta: parseInt(document.getElementById("dcompleta").value),
        pentregadas: parseInt(document.getElementById("pentregadas").value),
        padmin: parseInt(document.getElementById("padmin").value),
        pcompleta: parseInt(document.getElementById("pcompleta").value)
    };
    console.log(JSON.stringify(objetoEnviado));
    return objetoEnviado;
}


document.getElementById('fetchenviar').addEventListener('click', () => {
    if (jsonTabla === "") {
        fetch("insertar_comunidades.php")
            .then((response) => response.Json())
            .then((data) => {
                jsonTabla = Json.parse(Json.stringify(data));
                tabla(jsonTabla);
            });
    } else {
        tabla(jsonTabla);
    }
});



let tabla = (Json) => {
    let tablacontenido = "<tr><td>Comunidades</td><td>D.Entregadas</td><td>D.Admin</td><td>D.Completa</td><td>%.Entregadas</td><td>%Pobl.Admin</td><td>%Pobl.Completa</td></tr>";
    for (let i = 0; i < Json.length; i++) {

        tablacontenido += "<tr><td>";
        tablacontenido += Json[i].ccaa;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].dosisEntregadas;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].dosisAdministradas;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].dosisPautaCompletada;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].porcentajeEntregadas;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].porcentajePoblacionAdministradas;
        tablacontenido += "</td><td>";
        tablacontenido += Json[i].porcentajePoblacionCompletas;
        tablacontenido += "</td><td>";
        tablacontenido += "</td></tr>";


        document.getElementById('tabla').innerHTML = tablacontenido;
    }

}
