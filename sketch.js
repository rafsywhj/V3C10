
var sea;
var seaImg;
var ship;
var shipImg
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png", "ship-2.png");
shipImg1 = loadAnimation("ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,300);
  ship = createSprite(200,200);
  sea.addImage(seaImg);
  sea.velocityX = -3;
  ship.addAnimation("moving", shipImg);
  ship.addAnimation("light", shipImg1);
  ship.scale = 0.25;
  
}

function draw() {
  background("blue");
  drawSprites();
  if(keyDown("space")){
    ship.changeAnimation("light", shipImg1);
  }
  if(sea.x<0){
    sea.x = sea.width/2;
  }
 
}