var monkeyImage,monkey
var ground,stoneImage
var bananagroup,bananaImage,banana
var score,backImage,jungle
function preload(){
  monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  stoneImage=loadImage("stoneImage");
  backImage=loadImage("backImage");
  
}

function setup() {
  createCanvas(400, 400);
   ground= createSprite(200,350,400,10);
  
 monkey=createSprite(50,310,20,50);
monkey.addAnimation("monkey",monkeyImage);
monkey.scale=0.12;
  
  jungle=createSprite(200,200,400,400);
  jungle.addImage("Jungle",backImage);
  
  ground= createSprite(200,350,400,10);

 bananagroup =createGroup();
 score=0;
}

function draw() {
 
  ground.velocityX=-6;
  if (ground.x < 200){
      ground.x = ground.width/2;
    }
    if (keyDown("space") && monkey.y>=305){
      
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
    Spawnstone();
    
    if(bananagroup.isTouching(monkey)){
      bananagroup.destroyEach();
    }
    score = score+Math.round(frameRate/61);
  
    textSize(20);
    text("Survival Time: " + score,200,30);
   drawSprites();
  
}

function Spawnstone() {
 if (frameCount % 80 === 0) {
   
    var stone = createSprite(400,320,40,10);
    stone.addImage("Stone",StoneImage);
    stone.scale = 0.12;
    stone.velocityX = -6;
    stone.lifetime=70;
    
   var banana =createSprite(400,230,40,10);
    banana.addImage("Banana",bananaImage);
    banana.scale = 0.12;
    banana.velocityX = -6;
    banana.lifetime=70;
    bananagroup.add(banana);
 }
 
}