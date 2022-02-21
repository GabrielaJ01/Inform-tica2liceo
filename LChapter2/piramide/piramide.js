function piso(nPiso, altura){
    texto = "<p>"
     if(nPiso == altura){
       for(i=0; i<2*altura-1; i++){
         texto = texto + "#"
       }
     }else{
       nEspaciosIzq = altura-nPiso;
       nEspaciosDer = 2*nPiso-3;
    for(i=0;i<nEspaciosIzq; i++){
        texto = texto + "&nbsp;"
    }
    if(nPiso == 1){
      texto = texto + "#"
    }else{
      texto = texto + "#"
      for(i=0;i< nEspaciosDer;i++){
        texto = texto + "&nbsp"
      }
      texto = texto + "#"
    }
   }
   texto = texto + "</p>"
    return texto;
 }
  
 let nPisos;
do {
    nPisos = Number(prompt("Ingrese el número de pisos que desee"))
} while(isNaN(nPisos) || nPisos<=0 || nPisos>10 || nPisos%1 !=0)

let contenido = ""
for (let i=1; i <= nPisos; i++) {
    contenido = contenido + piso(i, nPisos);
    
}

let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = contenido;