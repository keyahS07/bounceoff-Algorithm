var movingRect , fixedRect;




function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 100 , 100, 50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(700,100,100,50)
  fixedRect.shapeColor = "green";
movingRect.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
     ){
    //movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";
    movingRect.velocityX = movingRect.velocityX*(-1);
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";  
  }
  drawSprites();
}