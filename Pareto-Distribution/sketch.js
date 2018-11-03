var minSlider, rangeSlider, alphaSlider;

var maxMin = 100000
var maxAlpha = 2
var maxRange = 1000000

var xOff = 20;
var yOff = 15;
var space = 30;
var start = 20;

  function setup() {
    createCanvas(windowWidth, windowHeight);

    minSlider = createSlider(1000, maxMin, 10000, 1000);
    minSlider.position(start,20);

    alphaSlider = createSlider(.01, maxAlpha, 1.16, 0.01);
    alphaSlider.position(start, start + space);

    rangeSlider = createSlider(10000, maxRange, 100000, 10000);
    rangeSlider.position(start, start + 2*space);
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
    for (var i = min; i <= range + .1; i += range / 1000) {
      var x = map(i,-range,range,0,width);

      var yval = 1 - pow((min/i),alpha);

      var y = map(yval,-.25,1,height,0);

      if(mouseX > x){
        line(mouseX, y+2, mouseX, y+2);
        var xpos = map(mouseX,0,width,-range,range);
        var yvalue = 1 - pow((min/xpos),alpha);


      }

      strokeWeight(2);
      vertex(x, y);
    }
    endShape();

    strokeWeight(1);
    fill(255);
    textStyle(NORMAL);
    textFont('Georgia');
    textSize(14)
    yvalue = round(yvalue*1000)/10 + "%"
    xDisp = "$" + round(xpos / 1000) + "K"
    if(yvalue != "NaN%"){
    text(yvalue + " of the population earns less than", 20,height/2)
    text(xDisp + " dollars per year.", 20,height/2+20)
}
  }

// Create labels for sliders
  function labels() {
    pop();
    strokeWeight(1);
    fill(255);
    textStyle(NORMAL);
    textFont('Georgia');

    var min = minSlider.value();
    var alpha = alphaSlider.value();
    var range = rangeSlider.value();

    // Shorten labels and add '$'
    if(range >= 1000 & range <= 1000000){
      range_half = "$" + range / 2000 + "K";
      range = "$" +  range / 1000 + "K";
    }

    if(range >= 1000000){
      var range_half = "$" + range / 2000 + "K";
      var range = "$" + range / 1000000 + "M";
    }

    // minSlider labels
    if(min >=1000 & min <= 1000000){
      min_half = "$" + min / 2000 + "K";
      min = "$" + min / 1000 + "K";
    }


    if(maxMin >=1000 & maxMin <= 1000000){
      maxMin_half = "$" + maxMin / 2000 + "K";
      maxMin = "$" + maxMin / 1000 + "K";
    }

    text("Min:", minSlider.x * 2 + minSlider.width - 15, minSlider.y + yOff);
    text(min , minSlider.x * 2 + minSlider.width + xOff + 5, minSlider.y + yOff);
    text(0, minSlider.x, minSlider.y + space);
    text(maxMin, minSlider.x + minSlider.width, minSlider.y + space);
    text(maxMin_half, minSlider.x + minSlider.width / 2 - 10, minSlider.y + space);


    // alphaSlider labels
    text("alpha:", alphaSlider.x * 2 + alphaSlider.width - 15, 65);
    text(alpha , alphaSlider.x * 2 + alphaSlider.width + xOff + 5, alphaSlider.y + yOff);
    text("0", alphaSlider.x, alphaSlider.y + space);
    text(maxAlpha, alphaSlider.x + alphaSlider.width, alphaSlider.y + space);
    text(maxAlpha / 2, alphaSlider.x + alphaSlider.width / 2, alphaSlider.y + space);

    // rangeSlider labels


    if(maxRange >= 999999){
      var maxRange_half = "$" + maxRange / 2000 + "K";
      var maxRange = "$" + maxRange / 1000000 + "M";
    }

    if(maxRange >= 1000 & maxRange <= 1000000){
      var maxRange_half = "$" + maxRange / 2000 + "K";
      var maxRange = "$" + maxRange / 1000 + "K";
    }

    text("Range:", rangeSlider.x * 2 + rangeSlider.width - 15, 95);
    text("[-" + range + "," + range + "]" , rangeSlider.x * 2 + rangeSlider.width + xOff + 5,  rangeSlider.y + yOff);
    text("1", rangeSlider.x, rangeSlider.y + space);
    text("$1M", rangeSlider.x + rangeSlider.width, rangeSlider.y + space);
    text("$500K", rangeSlider.x + rangeSlider.width / 2 - 10, rangeSlider.y + space);

    text("The Pareto Distribution:", rangeSlider.x, rangeSlider.y + 2*space);
    //text("P(X\u2264x) = 1 - (min_x/X)^\u03B1", rangeSlider.x, rangeSlider.y + 2*space + 14);

    push();
  }

  // Create Function to draw x and y axis
  function axis() {
    stroke(100);
    strokeWeight(1);
    push();

    // define positions
    var xaxis = height*4/5
    var yaxis = width/2

    // draw x axis
    translate(0,xaxis);
    line(0,0,width,0);
    pop();
    push();

    // draw y axis
    translate(width/2,0);
    line(0,0,0,height);
    pop();
    push();

    // get user input for range
    range = rangeSlider.value();

    // shorten displayed digits and add '$'
    if(range >= 1000 & range <= 1000000){
      range_half = "$" + range / 2000 + "K";
      range = "$" +  range / 1000 + "K";
    }

    if(range >= 1000000){
      range_half = "$" + range / 2000000 + "M";
      range = "$" + range / 1000000 + "M";
    }

    // x-axis labels
    text("-" + range, 0 , xaxis + 10)
    text("-" + range_half, width/4, xaxis + 10)
    text(range_half, 3*width/4 - 30, xaxis + 10)
    text(range, width - 30, height*4/5 + 10)


    // y-axis labels
    text(1, yaxis - 15, 10)
    text(0.5, yaxis - 20, xaxis/2)
    text(0.25, yaxis - 25, xaxis*3/4)
    text(0.75, yaxis - 25, xaxis/4)

    // origin
    text(0, yaxis - 3, xaxis + 10)

  }
