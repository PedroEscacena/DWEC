let xhr = new XMLHttpRequest();
let Json = "";
let jsonTabla = "";
let selector = document.getElementById('seleccionable').value;

document.getElementById("xmlenviar").addEventListener('click', () => {

    if (xhr.responseText === "") {
        xhr.open("GET", "listar_armas.php", true);
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

document.getElementById('fetchenviar').addEventListener('click', () => {
    if (jsonTabla === "") {
        fetch("listar_armas.php")
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
    let tablacontenido = "<tr><th>Nombre</th><th>Descripcion</th><th>Imagen</th><th>Bando</th></tr>";
    for (let i = 0; i < Json.length; i++) {
        if (document.getElementById('seleccionable').value == 1 && Json[i].selector == 1) {
            tablacontenido += "<tr><td>";
            tablacontenido += Json[i].nombre;
            tablacontenido += "</b></td>";
            tablacontenido += "<td>";
            tablacontenido += Json[i].descripcion;
            tablacontenido += "</td>";
            tablacontenido += "<td><img src='";
            tablacontenido += Json[i].imagen;
            tablacontenido += "'></td><td>";
            tablacontenido += "Aliados";
            tablacontenido += "</td></tr>";
        } else if (document.getElementById('seleccionable').value == 2 && Json[i].selector == 2) {
            tablacontenido += "<tr><td>";
            tablacontenido += Json[i].nombre;
            tablacontenido += "</b></td>";
            tablacontenido += "<td>";
            tablacontenido += Json[i].descripcion;
            tablacontenido += "</td>";
            tablacontenido += "<td><img src='";
            tablacontenido += Json[i].imagen;
            tablacontenido += "'></td><td>";
            tablacontenido += "Eje";
            tablacontenido += "</td></tr>";
        }
    }
    document.getElementById('tabla').innerHTML = tablacontenido;
}