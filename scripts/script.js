var context;
var canvas;

function init() {
  canvas = document.getElementById("canvas_a");
  canvas.addEventListener("mousedown", beginLine, false);
  canvas.addEventListener("mouseup", endLine, false);
  context = canvas.getContext("2d");
}

function beginLine(event) {
  x = event.pageX;
  y = event.pageY;
  context.moveTo(x, y);
}
function endLine(event) {
  x = event.pageX;
  y = event.pageY;
  context.lineTo(x, y);
}

function draw() {
  context.strokeStyle = "black";
  context.stroke();
}