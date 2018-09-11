let size = 5;

function setup () {
createCanvas(800,800);
background(80,60,100);
pascalTriangle(32);
}

function draw() {

}

function pascalTriangle(n) {
  let p = [];
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++){
      let num;
      if(j == 0 || j == i-1) {
        p.push(1);
      } else {
        p.push(p[p.length-i+1]+p[p.length-i]);
      }
      if(p[p.length-1] % 2 ==0){
        fill(255);
      } else{
        fill(0);
      }
      ellipse((j-i/2)* size + width/2, i*size + 50,size,size);
    }
  }

}
