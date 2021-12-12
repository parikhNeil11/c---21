var fixedRect, movingRect;
var gameObject1,gameObject2

function setup() {
  createCanvas(800,400);
   fixedRect = createSprite(200, 200, 50, 80);
   fixedRect.shapeColor = "green"
   movingRect = createSprite(200,100,80,30);
   movingRect.shapeColor = "green"
   fixedRect.velocityY = +5
   movingRect.velocityY = -5

gameObject1 = createSprite(600,200,80,70)
gameObject1.shapeColor="yellow"
gameObject1.velocityX = -1

gameObject2 = createSprite(350,200,80,70)
gameObject2.shapeColor="yellow"
gameObject2.velocityX = 1

}

function draw() {
  background(0);  


 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  bounceOff(gameObject1,gameObject2);
  drawSprites();
}

