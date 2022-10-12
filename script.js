const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
let eraser = false;
let drawWidth = 10
let drawColor = "#000000"
var wRatio = .75
var hRatio = .75
canvas.width = window.innerWidth * wRatio
canvas.height = window.innerHeight * hRatio
ctx.fillStyle = '#ffffff'
ctx.fillRect(0,0,canvas.width,canvas.height)
function id(id) {
    return document.getElementById(id)
}
function draw(e) {
    const rect = canvas.getBoundingClientRect();
    const elementRelativeX = e.clientX - rect.left
    const elementRelativeY = e.clientY - rect.top
    const canvasRelativeX = elementRelativeX * canvas.width / rect.width
    const canvasRelativeY = elementRelativeY * canvas.height / rect.height
    ctx.fillStyle = drawColor
    ctx.fillRect(canvasRelativeX, canvasRelativeY, drawWidth, drawWidth)  
}
function changeColor() {
    drawColor = id('color').value
}
function changeWidth() {
    drawWidth = id('drawingWidth').value
}
function toggleEraser() {
    if (!eraser) {
        drawColor = "#ffffff"
        id('eraser').innerText = "Eraser (on)"
        eraser = true
    } else if (eraser) {
        drawColor = id('color').value
        id('eraser').innerText = "Eraser (off)"
        eraser = false
    }
}
function download() {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'my_painting.jpg';
    link.click();
}
canvas.addEventListener("mousedown", () => {
    canvas.addEventListener("mousemove", draw)
})
canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", draw)
})