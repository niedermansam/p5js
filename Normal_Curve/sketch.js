var meanSlider, rangeSlider, devSlider;

var maxMean = 100
var maxDev = 50
var maxRange = 200

var xOff = 20;
var yOff = 15;
var space = 30;
var start = 20;





  function setup() {
    var cnv = createCanvas(windowWidth-25, windowHeight-25);
    var winx = (windowWidth - width) / 2;
    var winy = (windowHeight - height) / 2;
    cnv.position(winx, winy);

    meanSlider = createSlider(-maxMean, maxMean, 0, 1);
    meanSlider.position(xOff,start);

    devSlider = createSlider(.5, maxDev, 1, 0.1,0.1);
    devSlider.position(xOff,start+space);

    rangeSlider = createSlider(1, maxRange, 2, 1);
    rangeSlider.position(xOff,start+2*space);
  }



  // Draw function
  function draw() {
    background(51);

        // Get user inputs
    var mean = meanSlider.value();
    var dev2 = devSlider.value()**2;
    var dev = devSlider.value();
    var range = rangeSlider.value();

    labels();
    axis();

    stroke(255);
    strokeWeight(2);
    noFill();

    // define some useful constants
    var e = 2.718281
    var cons = (1/sqrt((TWO_PI*dev2)))

    // Draw Function
    beginShape();
    for (var i = -range; i <= range + .1; i += range / 100) {
      var x = map(i,-range,range,0,width);

      var exp = -1*(((i-mean)**2) / (2*dev2));
      var yval =  cons * pow(e, exp);

      var y = map(yval,-0.25,1,height,0);

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

            // Get user inputs
    var mean = meanSlider.value();
    var dev2 = devSlider.value()**2;
    var dev = devSlider.value();
    var range = rangeSlider.value();

    text("Mean:", meanSlider.x * 2 + meanSlider.width - xOff, 25);
    text(mean, meanSlider.x * 2 + meanSlider.width + xOff + 5, 25);
    text("-" + maxMean, meanSlider.x - xOff, meanSlider.y + yOff);
    text(maxMean, meanSlider.x + meanSlider.width - xOff, meanSlider.y + yOff);
    text("0", meanSlider.x + meanSlider.width / 2 - xOff, meanSlider.y + yOff);

    text("St. Dev:", devSlider.x * 2 + devSlider.width - xOff, 25 + space);
    text(dev, devSlider.x * 2 + devSlider.width + xOff + 5, 25 + space);
    text("0", devSlider.x - xOff + 5, devSlider.y + yOff);
    text(maxDev, devSlider.x + devSlider.width - xOff, devSlider.y + yOff);
    text(maxDev / 2, devSlider.x + devSlider.width / 2 - xOff, devSlider.y + yOff);


    text("Range:", rangeSlider.x * 2 + rangeSlider.width - 20,  25 + 2*space);
    text("[-" + range + "," + range + "]" , rangeSlider.x * 2 + rangeSlider.width + xOff + 5,  25 + 2*space);
    text("1", rangeSlider.x - xOff + 5, rangeSlider.y + yOff);
    text(maxRange, rangeSlider.x + rangeSlider.width - xOff, rangeSlider.y + yOff);
    text(maxRange/2, rangeSlider.x + rangeSlider.width / 2 - xOff, rangeSlider.y + yOff);

    push();
  }

  // Create Function to draw x and y axis
  function axis() {

    var xaxis = height*4/5
    var yaxis = width/2

    stroke(100);
    strokeWeight(1);
    push();

    translate(0,xaxis);
    line(0,0,width,0);
    pop();
    push();

    translate(yaxis,0);
    line(0,0,0,height);
    pop();
    push();

    var mean = meanSlider.value();
    var dev2 = devSlider.value()**2;
    var dev = devSlider.value();
    var range = rangeSlider.value();

    // x-axis labels


    text("-" + range, 0 , xaxis + 10)
    text(range, width - 15, xaxis + 10)

    text("-" + range/2, yaxis/2, xaxis + 10)
    text(range/2, 3*yaxis/2, xaxis + 10)

    // y-axis labels
    text(1, yaxis - 10, 10)
    text(0.5, yaxis - 20, xaxis/2)
    text(0.75, yaxis - 25, xaxis/4)
    text(0.25, yaxis - 25, xaxis*3/4)

    // origin
    text(0, yaxis - 7, xaxis + 10)

  }
