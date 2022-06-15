let canv = document.querySelector("#myCanvas");
let ctx = canv.getContext("2d")

class Personaje{
    constructor(x, y, angle, r){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.r = r;
    }
    dibujarse (){
        ctx.translate (this.x, this.y);
        ctx.rotate (this.angle*Math.PI/180);

        ctx.beginPath();
        ctx.arc (0, 0, this.r, 0, 2*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (0, 0, this.r/2, 0.25*Math.PI, 0.75*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();

        ctx.beginPath ();
        ctx.arc (15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();

        ctx.beginPath();
        ctx.moveTo(-5,0);
        ctx.lineTo(6,5);
        ctx.lineTo(-5,10);
        ctx.stroke();

        ctx.strokeStyle = "black";
        ctx.rotate (-this.angle*Math.PI/180);
        ctx.translate (-this.x, -this.y);
    }
}

let Francisco = new Personaje (300, 200, 45, 50)
Francisco.dibujarse ()
let Tomas = new Personaje (400, 300, -45, 70)
Tomas.dibujarse ()

let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = "Haz click en los personajes para que desaparezcan"

Canvas.addEventListener ("click")