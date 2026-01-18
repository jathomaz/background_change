let myImage;
let halfImage;
function preload();
myImage=loadImage('assets/valentime_table.jpg');

function setup() {
  colorMode(HSB);
 // createCanvas(520, 440);
  myImage=loadPixels();
  halfImage=(4*myImage.width)*(myImage.height/2);
  for (let i=0;i<halfImage;i++){
    myImage.pixels[i + halfImage]=myImage.pixels[i];
  }
  myImage.updatePixels();
}

function draw() {
 Image(myImage,0,0,width,height);
  }
 