var moving,fix
function setup() {
  createCanvas(800,400);
 fix = createSprite(400, 200, 50, 50);
  moving = createSprite(110,200,40,40);
}

function draw() {
  background("LightBlue");  
  moving.x = mouseX
  moving.y = mouseY
  if (moving.x - fix.x<moving.width/2+fix.width/2
    &&fix.x-moving.x<moving.width/2+fix.width/2
    &&moving.y-moving.x<moving.height/2+fix.height/2
    &&fix.y-moving.y<moving.height/2+fix.height/2){
      moving.shapeColor="green"
      fix.shapeColor="yellow"
    }
    else{
   moving.shapeColor ="orange" }
  drawSprites();
}
