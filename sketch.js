var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80)
}

function draw() {
  background("black");  
  if(wall.x-car.x < (wall.width+car.width)/2){
    car.velocityX=0;
    car.x=50
    var deformation=0.5*weight*speed* speed/22509;
    if(deformation>180){
      car.shapeColor=color(250,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,250,0);
    }
  }
  
  drawSprites();
}