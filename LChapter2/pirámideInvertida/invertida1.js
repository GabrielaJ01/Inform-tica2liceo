function piso (nPiso, altura){
    nEspacios = altura - nPiso
    nNumerales = nPiso
    // To do. Deben poner el número correcto de espacios y de numerales de acuerdo als nPiso y a la altura
    texto = "<p>"
    for (i=0; i<nEspacios; i++){
        texto = texto + "&nbsp"
    }
    for (i=0; i<nNumerales; i++){
        texto = texto + "#";
        texto = texto + "&nbsp";
        texto = texto+"</p>";
    }
    if (nPiso == 1){
        texto = texto + "#";
        texto = texto + "&nbsp";
        texto = texto+"</p>";
    }
    if (10<nPiso>1){

    }
    texto = texto+"</p>";
    return texto
}

let nPisos;
do {
    nPisos = parseInt(prompt("Ingrese el número de pisos que desee, puede ser un número del 1 al 10"))
} while (isNaN(nPisos) || nPisos<=0 || nPisos >= 10 );
let contenido = ""
for (let i=1; i <= nPisos; i++) {
    contenido = contenido + piso(i, nPisos);
    
}

let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;