let velocidadInicial = Number(prompt("Ingrese la velocidad inicial en m/s"))
let altura = Number(prompt("A qué altura desea llegar en metros?"))
let tiempo = (0-velocidadInicial)/(0-9.8)
let desplazamiento = (velocidadInicial)-(9.8*tiempo*tiempo)/2
let resultado = document.querySelector ("#resultado")
if (desplazamiento >= altura){
resultado.innerHTML = ("El proyectil logra llegar a la altura deseada")
}else{
    resultado.innerHTML = ("El proyectil no logra llegar a la altura deseada")
}