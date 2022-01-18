function piso (nPisos, altura){
    // To do. Deben poner el número correcto de espacios y de numerales de acuerdo als nPiso y a la altura
    return "<p>" + "####" + "</p>"
}
let nPisos;
do { //Lo que se hace
    nPisos = parseInt(prompt("Ingrese la altura de sus escaleras"))
} while (nPisos <= 0 || nPisos >= 10 || isNaN(nPisos)); //La condicion para que se repita  
let contenido = ""
for (let i = 1; i <= nPisos; i++){
    contenido = contenido + piso(i, nPisos)
}

let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;