
window.onload = iniciar;
document.cookie = "Contador = 0;";
let tirada = 0;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);

}
function errores(obj) {
    obj.className = "error";
    obj.focus();
}

function quitarErrores(obj) {
    obj.className = "";
    document.getElementById("").innerHTML = "";
}


function validarNombre() {
    let nombre = document.getElementById("nombre");
    if (nombre.value === "") {
        document.getElementById("errores").innerHTML = "Error! El campo Nombre  no puede estar vacío.";
        errores(nombre);

        return false;
    } else {

        return true;
    }
}


function validarAnyo() {
    let anyo = document.getElementById("anyo");
    if (anyo.value != "") {
        if (anyo.value >= 700 && anyo.value <= 8000) {
            document.getElementById("errores").innerHTML = "Error! El campo año da error.";
            errores(anyo);
            return false;
        } else {
            return true;
        }
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo año da error.";
        errores(anyo);
        return false;
    }
}
//
function validarHabilidades() {
    let habilidades = document.getElementById("habilidades");
    let regex = /^([M])$|^([W][S])$|^([B][S])$|^([S])$|^([T])$|^([W])$|^([A])$|^([L][d])$|^([S][v])$/;
    //DEBE PONER  M,o WS,o BS,o S,o T,o W,o A,o Ld, O Sv
    if (regex.test(habilidades.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Habilidades' no cumple el formato.";
        errores(habilidades);
        return false;
    }
}
//

function validarTirada() {
    let tirada = document.getElementById("tirada");
    let regex = /^([F])([x][2])$|^([>])$|^([=])$|^([<])([R])([0-9]{2})$/;
    //PONE UNA F, DESPUÉS DEBE PONER X2,<,> O =, DESPUÉS UNA R Y POR ULTIMO DOS NÚMEROS 
    if (regex.test(tirada.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Tirada' no cumple el formato.";
        errores(tirada);
        return false;
    }
}

function validarRol() {
    let rol = document.getElementById("rol");
    if (rol.value === 0) {
        document.getElementById("errores").innerHTML = "Error! El campo rol  no puede estar sin seleccionar.";
        errores(rol);
        return false;
    } else {

        return true;
    }
}
//

function validarContrasenya() {
    let password = document.getElementById("password");
    let regex = /^([A-Z]{2})([^a-zA-Z0-9:]{1})([a-zA-Z]{8,})[#]([0-9]{2})$/;
    //DE LA A LAZ DOS NUMERO, DESPUES UNCARACTER TODOS  MENOS LETRAS Y :, DESPUES LETRAS DE MINIMO 8 LARGO, DESPUES # Y DESPUES DOS NUMERO
    if (regex.test(password.value)) {
        return true;
    } else {
        document.getElementById("errores").innerHTML = "Error! El campo 'Contraseña' no cumple el formato.";
        errores(password);
        return false;
    }
}


function validar(e) {
    result = window.confirm("¿Desea enviar el formulario?");
    document.cookie = "Contador =" + (Math.random() * (6 - 0) + 1) + " ;";
    if (validarNombre() && validarAnyo() && validarHabilidades() &&
        validarTirada() && validarRol() && validarContrasenya && result) {
        return true;
    } else {

        e.preventDefault();
        if (!result) {
            window.alert("Envio denegado");
        } else {
            window.alert("Error en alguno de los campos");
        }

        return false;
    }
}
