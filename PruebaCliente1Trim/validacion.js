//Ejercicio final - Pedro Escacena
var numero = null;
var resto = null;
var letraSelect = null;
var cadenaTexto = "TRWAGMYFPDXBNJZSQVHLCKE";

function validar() {
    numero = document.getElementById("numeroDNI").value;
    letraSelect = document.getElementById("letra").value;
    var longitud = String(numero).length;
    resto = numero % 23;
    if (longitud != 8) {
        alert("LONGITUD DEBE SER 8");

    } else if (resto == letraSelect) {
        alert("funciona");
    } else if (resto != letraSelect) {
        alert("ERROR, LETRA INCORRECTA. LA LETRA CORRECTA ES: " + cadenaTexto.charAt(resto))
    }




}