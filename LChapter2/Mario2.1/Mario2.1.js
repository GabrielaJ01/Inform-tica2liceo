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
    }
    texto = texto + "&nbsp"
    for (let i = 0; i < nNumerales; i++) {
        texto = texto + "#";
    }
    texto = texto+"</p>";
    return texto
}

let nPiso;
do {
    nPiso = Number(prompt("Ingrese el número de pisos que desee"))
} while (nPisos%1 !=0 || nPisos >= 10 || nPisos<=0|| isNaN(nPisos));
let contenido = ""
for (let i=1; i <- nPiso; i++) {
    contenido = contenido + piso(i, nPisos);
    
}

let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;