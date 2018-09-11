
var angle = TWO_PI/3;
var slider;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(PI / 6, TWO_PI, PI / 3, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(255);
  translate(width/2, height/2);
  push();
  branch(200);
  pop();
  push();
  rotate(angle*2);
  branch(200);
  pop();
  push();
  rotate(-angle*2);
  branch(200);
  pop();
  push();
  rotate(-angle*4);
  branch(200);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(angle);
    branch(len * 0.6);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.6);
    pop();
  }
}
