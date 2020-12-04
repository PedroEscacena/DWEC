window.onload = iniciar;
document.cookie = "Contador = 0;";
let contadorCookies = 0;


function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
    document.getElementById("intentos").innerHTML = document.cookie;
    document.getElementById('nombre').addEventListener('blur', function (e) {
        let valor = e.target.value;
        nombre.value = valor.toUpperCase();
    });
    document.getElementById('apellidos').addEventListener('blur', function (e) {
        let valor = e.target.value;
        apellidos.value = valor.toUpperCase();
    });
}

function errores(obj) {
    obj.className = "error";
    obj.focus();
}
function quitarErrores(obj) {
    obj.className = "";
    document.getElementById("errores").innerHTML = "";
}


function nombreyApellidos() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");

    quitarErrores(nombre);
    quitarErrores(apellidos);

    if (nombre.value === "") {
        document.getElementById("errores").innerHTML = "Error! El campo Nombre  no puede estar vacío.";
        errores(nombre);

        return false;
    } else if (apellidos.value === "") {
        document.getElementById("errores").innerHTML = "Error! El campo  Apellidos no puede estar vacío.";
        errores(apellidos);
        return false;
    } else {

        return true;
    }
}

function validarEdad() {
    let edad = document.getElementById("edad");
    let regex = /^([0-9]{1,2})$|^([1][0-2][0-3])$/;
    /*([0-9]{1,2})$|^([1][0-2][0-3])  Debe escribir dos números entre 0 a 9, o un número entre 100 y 123 */
    quitarErrores(edad);

    if (regex.test(edad.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Edad' no cumple el formato.";
        errores(edad);
        return false;
    }
}

function validarNif() {
    let nif = document.getElementById("nif");
    let regex = /^([0-9]{8})([-])([a-zA-Z])$/;
    /*([0-9]{8})([-])([a-zA-Z]) Tiene que escribir 8 números entre 0 y 9, seguido de un guión y una letra de la a a la z en mayúsculas o minusculas */

    quitarErrores(nif);
    if (!regex.test(nif.value)) {
        document.getElementById("errores").innerHTML = "Error! El campo 'Nif' no cumple el formato.";
        errores(nif);
        return false;

    } else {
        return true;
    }
}

function validarEmail() {

    let email = document.getElementById("email");
    let regex = /^([a-zA-Z0-9]+)[@]([a-z]{1,50})[.]([a-z]{2,3})$/;

    //([a-zA-Z0-9\]+) Significa que debe poner letras mayusculas, minusculas y numeros
    //([\@]) Después está obligado a poner un arroba '@'
    //([a-z]{1,50}[\.]) Después debe poner combinación de letras minusculas que no sea mayor de 50 de largo y después debe poner un punto
    //([a-z]{2,3})$/ Por último, debe acabar con letras minusculas que sea de 2 o 3 de largo
    quitarErrores(email);
    if (regex.test(email.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Email' no cumple el formato.";
        errores(email);
        return false;
    }

}


function validarProvincia() {
    let provincia = document.getElementById("provincia");
    quitarErrores(provincia);

    if (provincia.value == 0) {
        document.getElementById("errores").innerHTML = "Error! El campo 'Provincia' está sin seleccionar.";
        errores(provincia);
        return false;
    } else {

        return true;
    }

}

function validarHora() {
    let hora = document.getElementById("hora");
    let regexHora = new RegExp(/^([0-2][0-9])[:]([0-6][0-9])$/);
    /*([0-2][0-9])[:]([0-6][0-9]) Debe escribir primero, un número entre 0 y 2, después otro entre 0 y 9. A continuación, debe escribir dos puntos ':' 
    y por último, otros dos números, el primero entre 0 y 6 y el segundo entre 0 y 9*/
    quitarErrores(hora);
    if (regexHora.test(hora.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Hora' no cumple el formato.";
        errores(hora);
        return false;
    }
}

function validarTelefono() {
    let telefono = document.getElementById("telefono");
    let regex = new RegExp(/(\d{9})$/);
    /*(\d{9})$/) Obliga a escribir 9 números */
    quitarErrores(telefono);
    if (regex.test(telefono.value)) {
        return true;
    } else {

        document.getElementById("errores").innerHTML = "Error! El campo 'Telefono' no cumple el formato.";
        errores(telefono);
        return false;
    }
}
function validarNacimiento() {
    let nacimiento = document.getElementById("fecha");
    let regex = new RegExp(/^([0-3][0-9])[/]([0-1][0-9])[/]([0-9]{4})$/);
    /*([0-3][0-9])[/] Primer número entre 0 y 3, segundo entre 0 y 9 seguido de un guion
      ([0-1][0-9])[/] Primer número entre 0 y 1, segundo entre 0 y 9 seguido de un guion
      ([0-9]{4} Debe escribir 4 números entre 0 y 9)
    */
    quitarErrores(nacimiento);
    if (regex.test(nacimiento.value)) {
        return true;
    } else {

        document.getElementById("errores").innerHTML = "Error! El campo 'Fecha de Nacimiento' no cumple el formato.";
        errores(nacimiento);
        return false;
    }
}

function validar(e) {

    document.cookie = "Contador =" + (contadorCookies++) + " ;";
    document.getElementById("intentos").innerHTML = document.cookie;

    result = window.confirm("¿Desea enviar el formulario?");
    if (nombreyApellidos() && validarEdad() && validarNif() && validarEmail() && validarProvincia() &&
        validarNacimiento() && validarTelefono() && validarHora() && result) {
        return true;
    } else {

        e.preventDefault();
        if (!result) {
            window.alert("Envio denegado");
        } else {
            window.alert("Error de formato en alguno de los campos");
        }

        return false;
    }
}




