


function setup(){
  createCanvas(600, 400);
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