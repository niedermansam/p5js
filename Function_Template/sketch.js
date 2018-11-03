// Define Global Variables
var mar = 25
var xpad = 10
var ypad = 13
var winx, winy;
var xrange = 10;
var yrange = 10;

function setup() {
  createCanvas(800, 800);
  var cnv = createCanvas(windowWidth-mar, windowHeight-mar);
  winx = (windowWidth - width) / 2;
  winy = (windowHeight - height) / 2;
  cnv.position(winx, winy);


}

function draw() {
  background(54);
  axis();
}


function axis() {

  // sex axis position
  var yaxis = .5 * width
  var xaxis = .8 * height

  //define line style
  background(51);
  stroke(255);
  strokeWeight(1);
  push();
 
  // draw x axis
  translate(0,xaxis);
  line(0,0,width,0);
  pop();
  push();
  // x axis labels (from left to right)
  text(-xrange, 0, xaxis + ypad);
  text(-xrange / 2, yaxis / 2, xaxis + ypad);
  text(0,yaxis - xpad, xaxis + ypad);
  text(xrange / 2, yaxis*3 / 2, xaxis + ypad);
  text(xrange, yaxis*2 - 15, xaxis + ypad);


  // draw y axis
  translate(yaxis,0);
  line(0,0,0,height);


  fill(255);
}
