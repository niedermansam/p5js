var minSlider, rangeSlider, alphaSlider;

var maxMin = 1000
var maxAlpha = 1
var maxRange = 10000

  function setup() {
    createCanvas(600, 400);

    minSlider = createSlider(.1, maxMin, 0, .1);
    minSlider.position(20,20);

    alphaSlider = createSlider(.01, maxAlpha, .8, 0.01);
    alphaSlider.position(20,50);

    rangeSlider = createSlider(1, maxRange, 100, 1);
    rangeSlider.position(20, 80);
  }

  // Draw function
  function draw() {
    background(51);

    labels();
    axis();

    stroke(255);
    strokeWeight(2);
    noFill();

    // Get user inputs
    var min = minSlider.value();
    var alpha = alphaSlider.value();
    var range = rangeSlider.value();


    // Draw Function
    beginShape();
    for (var i = min; i <= range + .1; i += range / 100) {
      var x = map(i,-range,range,0,width);

      var yval = 1 - pow((min/i),alpha)

      var y = map(yval,-.25,1,height,0);

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


    text("min", minSlider.x * 2 + minSlider.width - 10, 35);
    text(0, minSlider.x, minSlider.y + 25);
    text(maxMin, minSlider.x + minSlider.width, minSlider.y + 25);
    text(maxMin /2, minSlider.x + minSlider.width / 2, minSlider.y + 25);

    text("alpha", alphaSlider.x * 2 + alphaSlider.width - 10, 65);
    text("0", alphaSlider.x, alphaSlider.y + 25);
    text(maxAlpha, alphaSlider.x + alphaSlider.width, alphaSlider.y + 25);
    text(maxAlpha / 2, alphaSlider.x + alphaSlider.width / 2, alphaSlider.y + 25);

    text("Range", rangeSlider.x * 2 + rangeSlider.width - 10, 95);
    text("1", rangeSlider.x, rangeSlider.y + 25);
    text(maxRange, rangeSlider.x + rangeSlider.width, rangeSlider.y + 25);
    text(maxRange/2, rangeSlider.x + rangeSlider.width / 2 - 5, rangeSlider.y + 25);

    push();
  }

  // Create Function to draw x and y axis
  function axis() {
    stroke(100);
    strokeWeight(1);
    push();

    translate(0,height*4/5);
    line(0,0,width,0);
    pop();
    push();

    translate(width/2,0);
    line(0,0,0,height);
    pop();
    push();

    range = rangeSlider.value();

    // x-axis labels
    text("-" + range, 0 , height*4/5 + 10)
    text(range, width - 15, height*4/5 + 10)

    text("-" + range/2, width/4, height*4/5 + 10)
    text(range/2, 3*width/4, height*4/5 + 10)

    // y-axis labels
    text(1, width/2 - 15, 10)

    // origin
    text(0, width/2 - 3, height*4/5 + 10)

  }
