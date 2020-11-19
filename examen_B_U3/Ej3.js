/*
Un arquitecto de dudosa entereza moral, pretende vender parcelas comisionando a acaudalados
incautos. En la base de datos del arquitecto, las parcelas y sus compradores están codificadas
de la siguiente manera:

municipio:cod_parcela@nombre|apellido1|apellido2

Donde municipio es el municipio al que pertenece la parcela, cod_parcela es el código catastral
de la parcela compuesto de 4 letras y 4 números (en ese orden), nombre es el nombre del comprador,
apellido1 su primer apellido y apellido2 el segundo.

Elabora el código en JavaScript para obtener por separado el municipio, la parcela (dividido el
código en las letras y los números correspondientes), el nombre, y los apellidos (los dos juntos
 y en una única línea). Cada uno debe presentarse en un elemento (p o div, como quieras) de HTML.
*/



//Ejemplo: bormujos:abcd1234@pedro|escacena|macias
function splitparcela() {
    let cadena = document.getElementById("cadena").value;
    let splitcadena1 = cadena.split(':');
    let splitcadena2 = splitcadena1[1].split('@');
    let splitcadena3 = splitcadena2[1].split('|');
    let letras = splitcadena2[0].substr(0, 4);
    let numeros = splitcadena2[0].substr(4, 8);
    if (isNaN(numeros)) {
        alert("ERROR NO ES UN NUMERO");
    } else {
        if (numeros.length < 4 || letras.length < 4) {
            alert("Longitud numeros mal o longitud letras mal ");
        } else {
            document.getElementById("mostrar").innerHTML += "<br>" + "Municipio: " +
                splitcadena1[0] + "<br>" + "---Codigo Parcela--- " + "<br>" + "Letras: " + letras + "<br>" + "Numeros: " + numeros + "<br>" + "Nombre: " + splitcadena3[0] + "<br>" + "Apellidos: " + splitcadena3[1] + splitcadena3[2];

        }

    }

}