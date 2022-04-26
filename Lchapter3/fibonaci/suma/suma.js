let denominador
let numero
let i = 1
let suma = 0

for (k=0; k<500; k++){
    denominador = 2*k+1
    suma = suma + (i/denominador)
    i = i*-1
}
suma = suma*4

console.log("El resultado es: " + suma)
resultado.innerHTML = "El suma es: " + suma