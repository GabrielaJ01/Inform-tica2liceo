let urlVolta = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Volta_A.jpg/1200px-Volta_A.jpg"
let urlNewton = "https://www.biografiasyvidas.com/monografia/newton/fotos/newton_420.jpg"
let imgHtml = document.querySelector("#imagenCientífico")

let nombre = prompt ("Ingrese el nombre del científico")
if (nombre == "Volta"){
    imgHtml.src = urlVolta
}else{
    imgHtml.src = urlNewton
}