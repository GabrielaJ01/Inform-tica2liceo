let nPisos = parseInt(prompt("Ingrese la cantidad de pisos que desee"));

function techo(){
    console.log   ("  --------- ")
console.log      (" /          \\")
}

function piso(){
    console.log (" ____________")
    console.log ("|   _    _   |")
    console.log ("|  |_|  |_|  |")
    console.log ("|____________| ")
}

function pisoBase(){
    console.log (" ____________")
    console.log ("|   _    _   |")
    console.log ("|  |_|  |_|  |")
    console.log ("|      _     | ")
    console.log ("|_____| |____| ")
}

function casa (nPisos){
        techo()
        for(let i=0; i<nPisos; i++) {piso()}
        pisoBase()
    }
casa(nPisos)