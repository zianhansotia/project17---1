var PLAY = 1;
var END = 0;
var gameState = PLAY;

var fruit,fruit1,fruit2,fruit3,fruit4;
var sword,swordImg;

var alien,alienImg,alienGroup,alienSound;

var fruitsGroup
var soundSword;

var gameOver;

var score = 0;






function preload(){
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOver = loadImage("gameover.png");
  alienImg = loadAnimation("alien1.png","alien2.png");
  alienSound = loadSound("gameover.mp3");
  
  swordImg = loadImage("sword.png");
  soundSword = loadSound("knifeSwooshSound.mp3");
  
  
 
}

function setup() {
  createCanvas(600, 600);
  
  sword = createSprite(300,300,10,10);
  sword.addImage(swordImg);
  sword.scale = 0.5;
  
  fruitsGroup = new Group();
  alienGroup = new Group();
 
}

function draw(){
  background("lightpink");
  
  if(gameState === PLAY){
    spawnFruits();
    spawnAliens();
  
    sword.y = mouseY;
    sword.x = mouseX;
    
    if (fruitsGroup.isTouching(sword)){
       fruitsGroup.destroyEach();
       score = score + 10;
       soundSword.play();
    }
    
    if(alienGroup.isTouching(sword)){
      alienSound.play();
      gameState = END;
     }
  }
  else if(gameState === END){
         fruitsGroup.destroyEach();
         alienGroup.destroyEach();
         fruitsGroup.setVelocityXEach(0);
         alienGroup.setVelocityXEach(0);
         sword.addImage(gameOver);
         sword.x = 300;
         sword.y = 300;
         
           
          
  }

  drawSprites();
  
  text("SCORE: "+score,500,50)
}

function spawnFruits(){
  if(frameCount % 80 === 0){
     fruit = createSprite(-10,Math.round(random(50,550)),10,10);
     fruit.velocityX = 8;
     var rand = Math.round(random(1,4));
     if(rand === 1){
       fruit.addImage(fruit1);
     }
     else if(rand === 2){
       fruit.addImage(fruit2);
     }
      else if(rand === 3){
       fruit.addImage(fruit3);
     }
      else if(rand === 4){
       fruit.addImage(fruit4);
     }
    
    fruit.scale = 0.2;
    fruit.lifetime = 100;
    fruitsGroup.add(fruit);
  }
}

function spawnAliens(){
  if(frameCount % 110 === 0){  
    alien = createSprite(-10,Math.round(random(400,200)),10,10); 
    alien.addAnimation("hgf",alienImg);
    alien.scale = 1;
    alien.velocityX = 6;
    alien.lifetime = 110;
    alienGroup.add(alien);
  }
}





         