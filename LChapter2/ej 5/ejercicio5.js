let peso = Number (prompt("Ingrese su peso en kg"))
let estatura = Number (prompt("Ingrese su estatura en m"))
let IMC = (peso/(estatura*estatura))
let resultado = document.querySelector ("#resultado")
if (IMC<18.5){
    resultado.innerHTML = ("Usted tiene insuficiencia ponderal")
}else{
    if (IMC<24.9){
        resultado.innerHTML = ("Usted está normal")
    }else{
        if (IMC<25){
            resultado.innerHTML = ("Usted tiene sobrepeso")
        }else{
            if (IMC<29.9){
                resultado.innerHTML = ("Usted tiene preobesidad")
            }else{
                if (IMC<30){
                    resultado.innerHTML = ("Usted tiene obesidad")
                }else{
                    if (IMC<34.9){
                        resultado.innerHTML = ("Usted tiene obesidad clase I")
                    }else{
                        if (IMC<39.9){
                            resultado.innerHTML = ("Usted tiene obesidad clase II")
                        }else{
                            if (IMC>40){
                                resultado.innerHTML = ("Usted tiene obseidad clase III")
                            }
                        }
                    }
                }
            } 
        }
    }
}