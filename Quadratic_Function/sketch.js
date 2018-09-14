var bSlider, bSlider, cSlider;


function setup() {
  createCanvas(600, 400);

  aSlider = createSlider(-10,10,1, 0.1);
  aSlider.position(20,20);

  bSlider = createSlider(-100,100, 0.1);
  bSlider.position(20,50);

  cSlider = createSlider(-100,100, 0.1);
  cSlider.position(20,80);

  rangeSlider = createSlider(2,100,50,2);
  rangeSlider.position(20, 110);
}

// Draw function
function draw() {
  background(51);

  labels();
  axis();

  stroke(255);
  strokeWeight(2);
  noFill();

  var a = aSlider.value();
  var b = bSlider.value();
  var c = cSlider.value();
  var range = rangeSlider.value();


  beginShape();
  for (var i = -range; i <= range + .1; i += .01) {
    var x = map(i,-range,range,0,width)
    var y = map(a*i**2 + b*i + c,-range,range,height,0)
    vertex(x, y);
  }
  endShape();
}

function labels() {
  pop();
  strokeWeight(1);
  fill(255);
  textStyle(NORMAL);
  textFont('Georgia')


  text("A", aSlider.x * 2 + aSlider.width - 10, 35);
  text("-10", aSlider.x, aSlider.y + 25);
  text("10", aSlider.x + aSlider.width, aSlider.y + 25);
  text("0", aSlider.x + aSlider.width / 2, aSlider.y + 25);

  text("B", bSlider.x * 2 + bSlider.width - 10, 65);
  text("-100", bSlider.x, bSlider.y + 25);
  text("100", bSlider.x + bSlider.width, bSlider.y + 25);
  text("0", bSlider.x + bSlider.width / 2, bSlider.y + 25);

  text("C", cSlider.x * 2 + cSlider.width - 10, 95);
  text("-100", cSlider.x, cSlider.y + 25);
  text("100", cSlider.x + cSlider.width, cSlider.y + 25);
  text("0", cSlider.x + cSlider.width / 2, cSlider.y + 25)

  text("Range", rangeSlider.x * 2 + rangeSlider.width - 10, 125);
  text("1", rangeSlider.x, rangeSlider.y + 25);
  text("100", rangeSlider.x + rangeSlider.width, rangeSlider.y + 25);
  text("50", rangeSlider.x + rangeSlider.width / 2 - 5, rangeSlider.y + 25)

  push();
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

  range = rangeSlider.value();

  // x-axis labels
  text("-" + range, 0 , height/2 + 10)
  text(range, width - 15, height/2 + 10)
  text(range, width - 15, height/2 + 10)

  text("-" + range/2, width/4, height/2 + 10)
  text(range/2, 3*width/4, height/2 + 10)

  // y-axis labels

  text(range, width/2 - 15, 10)
  text("-" + range, width/2 - 20, height - 5)

  // origin
  text(0, width/2 - 3, height/2 + 10)

}
