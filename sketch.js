function setup() {
  createCanvas(800,400);
  movingR =   createSprite(400, 200, 50, 50);
fixedR = createSprite(450,350,30,30);
movingR.debug = true;
fixedR.debug = true;
fixedR.shapeColor = "black";
movingR.shapeColor = "black";
}
function draw() {
  background(255,255,255);  
movingR.x = mouseX ;
movingR.y = mouseY ;
if(fixedR.x - movingR.x < movingR.width/2 + fixedR.width/2
  && movingR.x - fixedR.x < movingR.width/2 + fixedR.width/2
  && fixedR.y - movingR.y < movingR.height/2 + fixedR.height/2
  && movingR.y - fixedR.y < movingR.height/2 + fixedR.height/2
  ){
  movingR.shapeColor = "blue";
  fixedR.shapeColor = "blue";
}
else{
  fixedR.shapeColor = "black";
movingR.shapeColor = "black";
}
console.log(movingR.x);
  drawSprites();
}