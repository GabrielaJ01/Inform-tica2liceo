nombres = ["Arámbula","Anita","Dani","Yeidi","Gabyloca","Chechito","Tomycrack","Pulga","Wana","Mari","Villa","Francisco","Jorgito","Mate","Jacobo","Castellanos","Jose"]
edades = []
suma = 0

for (let i = 0; i <17; i++) {
 do {
    edad = Number(prompt(`Ingrese la edad de ${nombres[i]}`))
 } while (isNaN (edad) || edad<10|| edad>20);
}

for (let i = 0; i < 17; i++) {
   suma = Number(suma + edades [i])
}
let promedio = Number(suma/17)
let total = document.querySelector("#total")
total.innerHTML = "El promedio de las edades es:" + Number(promedio)