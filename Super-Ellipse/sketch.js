

function setup() {
  createCanvas(400, 400);
  createP("Range:");
  rangeSlider = createSlider(1,10,1);
  createP("A:");
  aSlider = createSlider(1,10,1);
  createP("B:");
  bSlider = createSlider(1,10,1);
  createP("C:");
  cSlider = createSlider(1,10,1);

}

// Draw function
function draw() {
  background(51);

  var range = rangeSlider.value();
  var a = aSlider.value();
  var b = bSlider.value();
  var c = cSlider.value();

  axis();

  stroke(255);
  strokeWeight(2);
  noFill();

  beginShape();
  for (var x = -range; x <= range + .1; x += .01) {
    var x = map(x,-range,range,0,width)
    var y = map(a*(x**2) + b*x + c,-range,range,height,0)
    vertex(x, y);
  }
  endShape();
}

// Create Function to draw x and y axis
function axis() {
  stroke(100);
  strokeWeight(1);
  push();

  translate(0,height/2);
  line(0,0,width,0);
  pop();
  push();

  translate(width/2,0);
  line(0,0,0,height);
  pop();
  push();
}
