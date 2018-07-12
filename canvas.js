var mycanvas = document.getElementById("artboard")

var canvas = mycanvas.getContext("2d")
canvas.
canvas.beginPath()
canvas.moveTo(0,0)
canvas.lineTo(400,400)
canvas.stroke()

canvas.strokeText('Hello Canvas',0,0)
canvas.strokeText('Hello canvas',100,100)

canvas.beginPath()
canvas.arc(100,100,50,0,360,false)
canvas.stroke()

canvas.beginPath()
canvas.arc(70,80,10,0,360)
canvas.stroke()

canvas.beginPath()
canvas.arc(128,80,10,0,360)
canvas.stroke()

canvas.beginPath()
canvas.arc(100,120,10,Math.PI,false)
canvas.stroke()
x++
y++
if(y>400){
    y--
}