var selectcolor=document.getElementById ("select_color")

function setup() {
  var c=createCanvas(400, 400);
  c.parent ("canvasWrapper");
}

function draw() {
  background(selectcolor.value);
}
