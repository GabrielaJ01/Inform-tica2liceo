nombres = ["Arámbula","Ana","Daniela","Juan Daniel","Gabriela","Sergio","Tomás","Sofia","Juana","Mariana","Villa","Francisco","Jorgito","Mate","Jacobo","Castellanos","Jose"]
edades = []
suma = 0

for (let i = 0; i <17; i++) {
 do {
    edad = Number(prompt(`Ingrese la edad de ${nombres[i]}`))
 } while (isNaN (edad) || edad<10|| edad>20);
 edades.push(edad)
}

for (let i = 0; i < 17; i++) {
   suma = suma + edades[i]
}
let promedio = suma/17
let total = document.querySelector("#total")
total.innerHTML = "El promedio de las edades es:" + promedio
 