let r = 0;
let b = 255;
function setup() {
  createCanvas(600,400);
 // colorMode(HSB);
 // background(120,100,100);
}

function draw() {
  
 
  r=map(mouseX,0,width,0,255);
  b=map(mouseX,0,width,255,0);
 // col=map(mouseX,0,width-20,0,255);
  background(r,0,b);
  fill(250,118,222); //orange
  ellipse(mouseX, 200,30, 50);
}