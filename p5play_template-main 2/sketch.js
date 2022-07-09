var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite (200,200,10,10)
  ball.shapeColor = "Red"
}

function draw() 
{
  background("Black");
  drawSprites ();
if(keyDown(LEFT_ARROW)){
  ball.velocityX = -2
  ball.velocityY = 0
}
if(keyDown(RIGHT_ARROW)){
  ball.velocityX = +2
  ball.velocityY = 0
}
if(keyDown(UP_ARROW)){
  ball.velocityY = -2
  ball.velocityX = 0
}
if(keyDown(DOWN_ARROW)){
  ball.velocityY = +2
  ball.velocityX = 0
}
}




