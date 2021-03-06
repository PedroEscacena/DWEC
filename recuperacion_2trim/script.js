document.getElementById("botonfilmxml").addEventListener('click', cargarxml(), false);
document.getElementById("botonfilmfetch").addEventListener('click', cargarfetch(), false);
document.getElementById("botoncharacter").addEventListener('click', cargarpersonaje(), false);



function cargarxml() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhr.responseText);
            procesar_respuestaXML(data);
        }
    };
    xhr.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
    xhr.send();
}
let peliculas = [];
let personajes = [];

function procesar_respuestaXML(data) {

    peliculas = [];

    for (let pelicula of data) {

        var peliculita = new Object();
        peliculita.id = pelicula.id;
        peliculita.title = pelicula.title;
        peliculita.description = pelicula.description;
        peliculita.director = pelicula.director;
        peliculita.producer = pelicula.producer;
        peliculita.release_date = pelicula.release_date;
        peliculita.rt_score = pelicula.rt_score;
        peliculita.url = pelicula.url;

        peliculas.push(peliculita);

    }

    console.log(peliculas);
    insertar_peliculasXML(peliculas);
}

function insertar_peliculasXML(peliculas) {
    fetch("insert_films.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(peliculas),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            procesar_peliculas(data); console.log("XMLHTTPREQUEST");

        })
        .catch((err) => console.log("pedro: " + err));
}

function cargarfetch() {

    fetch('https://ghibliapi.herokuapp.com/films')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            insertarpeliculasfetch(data);

        })
        .catch((err) => console.log('Pedro: ' + err));

}

function insertarpeliculasfetch(peliculas) {
    fetch('insert_films.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(peliculas),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {

            procesar_peliculas(data); console.log("FETCH");
        })
        .catch((err) => console.log('Pedro: ' + err));

}


function procesar_peliculas(peliculas) {
    let tabla = "<tr><th>title</th><th>description</th><th>director</th><th>producer</th><th>Release_date</th>" +
        "<th>Rt_score</th><th>URL</th><th>BOTON</th></tr>";
    console.log(peliculas.length);
    for (let pelicula of peliculas) {
        tabla += "<tr><td>";
        tabla += pelicula.title;
        tabla += "</td><td>";
        tabla += pelicula.description;
        tabla += "</td><td>";
        tabla += pelicula.director;
        tabla += "</td><td>";
        tabla += pelicula.producer;
        tabla += "</td><td>";
        tabla += pelicula.release_date;
        tabla += "</td><td>";
        tabla += pelicula.rt_score;
        tabla += "</td><td>";
        tabla += pelicula.url;
        tabla += "</td><td>";
        let boton = document.createElement("input");
        boton.setAttribute("type", "submit");
        boton.setAttribute("id", pelicula.id);
        boton.setAttribute("value", "personajes " + pelicula.title);
        boton.setAttribute("onclick", "peoplebyid()");
        document.body.appendChild(boton);
        tabla += boton;
        tabla += "</td></tr>";

    }
    document.getElementById("ghiblifilms").innerHTML = tabla;
}


function peoplebyid(datos) {
    fetch("people_by_film_id.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {

            procesar_personajes(data);
        })
        .catch((err) => console.log("pedro: " + err));
}


function cargarpersonaje() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(xhr.responseText);
            procesar_respuestacharacter(data);
        }
    };
    xhr.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
    xhr.send();
}

function procesar_respuestacharacter(data) {

    personajes = [];

    for (let personaje of data) {

        var personajito = new Object();

        personajito.id = personaje.id;
        personajito.name = personaje.name;
        personajito.gender = personaje.gender;
        personajito.age = personaje.age;
        personajito.eye_color = personaje.eye_color;
        personajito.hair_color = personaje.hair_color;
        personajito.films = personaje.films;

        personajes.push(personajito);
    }

    console.log(personajes);
    insertar_personaje(personajes);
}

function insertar_personaje(personajes) {
    fetch("insert_people.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(personajes),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
        })
        .catch((err) => console.log("pedro: " + err));
}



function procesar_personajes(personajes) {
    let tabla2 = "<tr><th>Name</th><th>gender</th><th>age</th><th>eye_color</th><th>hair_color</th>" +
        "<th>films</th></tr>";
    console.log(personajes.length);

    for (let personaje of personajes) {

        tabla2 += "<tr><td>";
        tabla2 += personaje.name;
        tabla2 += "</td><td>";
        tabla2 += personaje.gender;
        tabla2 += "</td><td>";
        tabla2 += personaje.age;
        tabla2 += "</td><td>";
        tabla2 += personaje.eye_color;
        tabla2 += "</td><td>";
        tabla2 += personaje.hair_color;
        tabla2 += "</td><td>";
        tabla2 += personaje.films;
        tabla2 += "</td></tr>";

    }
    document.getElementById("ghiblicharacters").innerHTML = tabla2;
}




