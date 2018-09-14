

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(54);
  axis();
}


function axis() {
  background(51);
  stroke(255);
  strokeWeight(4);
  push();

  translate(0,height/2);
  line(0,0,width,0);
  pop();
  push();

  translate(width/2,0);
  line(0,0,0,height)
}
