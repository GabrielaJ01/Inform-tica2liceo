let mover = Number(prompt("Ingrese el número de discos a mover"))
let origen = Number(prompt("Ingrese la columna de origen (1, 2, o 3)"))
let destino = Number(prompt("Ingrese la columna de destino (1, 2, o 3)"))
let plataformaintermedia = 0

function hanoi (discos, origen, destino){
    if (discos==1) {
        return (`${origen} --> ${destino}`)
    } else {
        if (origen == 1 && destino == 3){
            
        }
    }

}

let resultado = document.querySelector("#resultado")
resultado.innerHTML = hanoi (discos, origen, destino)