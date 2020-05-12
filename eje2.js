var w = window.innerWidth;
var h = window.innerHeight;


function setup(){
  createCanvas(w, h);
  background(0);
}
function draw(){   
   /* xpos = random(0, width);
    ypos = random(0,height);
    noStroke();
    fill(100,random(0,255), random(0,255),100);
    ellipse(xpos, ypos, 20,20); */
    xpos = mouseX;
    ypos = mouseY;
    noStroke();
    fill(100,random(0,255), random(0,255),100);    
    ellipse(xpos, ypos, 20,20);
}

function mousePressed(){
    background(random(0,255),random(0,255),random(0,255));

}

window.onresize = function(){
  w = window.innerWidth;
  h = window.innerHeight;
  resizeCanvas(w,h);
  background(random(0,255),random(0,255),random(0,255));
}