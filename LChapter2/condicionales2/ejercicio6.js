let Numero = Number(prompt("Ingrese un número"))
let resultado = document.querySelector ("#resultado")
if (Numero%3 == 0 && Numero%5 == 0){
    resultado.innerHTML = ("FizzBuzz")
}else{
    if (Numero%5 == 0){
        resultado.innerHTML = ("Buzz")
    }else{
        if (Numero%3 == 0){
            resultado.innerHTML = ("Fizz")
        }
    }
}