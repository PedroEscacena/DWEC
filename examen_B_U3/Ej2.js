/*
Realiza un script que pida una cadena de texto (mediante input o prompt) y la muestre en un elemento
HTML (p o div, como quieras).

En otro elemento HTML deberá mostrarla convirtiendo los caracteres en mayúscula o minúscula de manera
completamente aleatoria, y, además, entre carácter y carácter, imprima un guión, y además elimine todos
los espacios posibles (internos y externos).

Por ejemplo:
“Si quiere vivir, venga conmigo”
“s-I-q-U-I-e-r-e-v-I-v-I-R-,-V-e-N-G-a-c-O-N-m-i-G-O”
*/

function separarconguiones() {
    let cadena = document.getElementById("cadena").value;
    let cadena2 = "";

    for (let i = 0; i < cadena.length; i++) {
        let numrandom = Math.floor(Math.random() * 10 + 1);
        if (cadena.charAt(i) == ' ') {

        } else {
            if (numrandom % 2 == 0) {
                cadena2 += cadena.charAt(i).toUpperCase();
                cadena2 += "-";
            } else {

                cadena2 += cadena.charAt(i).toLowerCase();
                cadena2 += "-";
            }
        }

    }
    document.getElementById("mostrar").innerHTML += "Cadena sin espacios y con guiones: " + cadena2 + "<br>";
}
