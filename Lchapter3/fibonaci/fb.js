do{
    numero = Number(prompt("Ingrese el número de fibonacci que desea conocer"))
}
while (isNaN(numero)||numero<0||numero>40);

function fb(numero){
    if (numero==1 || numero==0){
        return 1 
    } else {
        return fb(numero-1) + fb(numero-2);
    }
}

let resultado = document.querySelector("#resultado")
resultado.innerHTML = "El número de Fibonacci " + numero + " es " + fb(numero)