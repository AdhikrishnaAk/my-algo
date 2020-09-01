var movingRect,fixedRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,250,55,80)
fixedRect.velocityX=1
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }else{
    movingRect.shapeColor="green"
    fixedRect.shapeColor="green"
  }
 bounceOff(movingRect,fixedRect);
  drawSprites();
}

