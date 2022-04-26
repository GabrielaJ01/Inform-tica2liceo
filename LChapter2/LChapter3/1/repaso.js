let nacionalidad
do {
    nacionalidad = prompt("Ingrese si es de US o Col")
} while (nacionalidad != "US" && nacionalidad != "Col");
let temperatura
if (nacionalidad == "US"){
    do {
      temperatura = prompt ("Ingrese su temperatura en °F")
    } while (isNaN(temperatura));
    do {
      estatura = prompt ("Ingrese su estatura en pies")
    } while (isNaN(estatura));
    do {
      acompañante = prompt ("Viene usted acompañado? (Si/No)")
    } while (acompañante !="Si" && acompañante !="No");
    if (nacionalidad == "US" && ((acompañante == "No" && estatura<4.5) || temperatura>100.4)) {
      resultado.innerHTML = "No puede entrar"
    } else {
      resultado.innerHTML = "Sí puede entrar"
    }
}
if (nacionalidad == "Col"){
  do {
    temperatura = prompt ("Ingrese su temperatura en °C")
  } while (isNaN(temperatura));
  do {
    estatura = prompt ("Ingrese su estatura en m")
  } while (isNaN(estatura));
  do {
    acompañante = prompt ("Viene usted acompañado? (Si/No)")
  } while (acompañante !="Si" && acompañante !="No");
  if (nacionalidad == "Col" && ((acompañante == "No" && estatura<1.4) || temperatura>38)) {
    resultado.innerHTML = "No puede entrar"
  } else {
    resultado.innerHTML = "Sí puede entrar"
  }
}
