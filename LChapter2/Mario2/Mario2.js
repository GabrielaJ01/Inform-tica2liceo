function piso (nPisos, altura){
    // To do. Deben poner el número correcto de espacios y de numerales de acuerdo als nPiso y a la altura
    texto = "<p>"
    for (i=0; i< altura-nPisos; i++){
        texto = texto + "&nbsp"
    }
    for (i=0; i<nPisos; i++){
        texto = texto + "#";
    }
    texto = texto+"</p>";
    return texto
}

let nPiso;
do {
    nPiso = Number(prompt("Ingrese el número de pisos que desee"))
} while (nPiso%1 !=0 || nPiso >= 10 || isNaN(nPiso));
let contenido = ""
for (let i=1; i <- nPiso; i++) {
    contenido = contenido + piso(i, nPisos);
    
}

let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;