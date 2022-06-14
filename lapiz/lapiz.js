let canv = document.querySelector ("#myCanvas")
let ctx = canv.getContext("2d")
ctx.fillStyle = "pink";
ctx.strokeStyle = "pink";
ctx.beginPath()
ctx.arc(100,100,50,1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.beginPath()
ctx.rect (50,100,100,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f2e468";
ctx.strokeStyle = "#f2e468";
ctx.beginPath()
ctx.rect (50,150,100,300)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f5ddc1";
ctx.strokeStyle = "#f5ddc1";
ctx.beginPath()
ctx.moveTo (50,450)
ctx.lineTo(100,550)
ctx.lineTo(150,450)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f5be84";
ctx.strokeStyle = "#f5be84";
ctx.beginPath()
ctx.moveTo (50,450)
ctx.lineTo(100,550)
ctx.lineTo(150,450)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#75706b";
ctx.strokeStyle = "#75706b";
ctx.beginPath()
ctx.moveTo (85,520)
ctx.lineTo(100,550)
ctx.lineTo(115,520)
ctx.stroke()
ctx.fill()