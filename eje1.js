//Code Example
//Victor Mahecha
//First experiment with P%.js
//this code is a processing javacritp interpretatin

var g = 255;
var b = 30;
var r = 10;
var col =0;
var cal = 0;
var avec = 0;

var fig = { 
    posX: 20,
    posY: 200,
    diameter: 2
};

function setup(){
    // Here we create project canvas
    createCanvas(600,400);
    background(220,100,100);
}

function draw(){
   col = map(mouseX,0,width,0,255);
   cal = map(mouseY,0,height,0,255);
   avec = (col+cal )/ 2;
   background(avec,col,cal);
   stroke(255,255,255);
   strokeWeight(5);
   fill(red, blue, green);
   ellipse(fig.posX,fig.posY,fig.diameter,fig.diameter);
   fig.posX++;
   fig.posY = 200*(exp(-0.001*fig.posX))*sin(fig.posX/10) +200 ;
     
}

/*function mousePressed() {
    background(0, 0, 0);

}*/
