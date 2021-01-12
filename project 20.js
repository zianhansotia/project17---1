var garden,gradenImg;
var jerryone,jerrytwo;
var tomone,tomtwo;
var jerry;
var tom;





function preload() {
    //load the images here
    jerrytwo = loadImage("images/jerryOne.png");
    jerryone = loadAnimation("images/jerryTwo.png","images/jerryThree.png","images/jerryFour.png");
    tomtwo = loadImage("images/tomOne.png");
    tomone = loadAnimation("images/tomTwo.png","images/tomThree.png","images/tomFour.png");
    gradenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    garden = createSprite(200,200,10,10);
    garden.addImage(gradenImg);
    garden.scale = 2;

    tom = createSprite(700,500,10,10);
    tom.addImage(tomtwo);
    tom.setCollider("circle",0,0,500);
    tom.debug = false;
    tom.scale = 0.1;

    jerry = createSprite(100,500,10,10);
    jerry.addImage(jerrytwo);
    jerry.setCollider("circle",0,0,500);
    jerry.debug = false;
    jerry.scale = 0.1;

}

function draw() {

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    function isTouching(object1,object2){
        if(object1.x - object2.x < object1.width/2.5 + object2.width/9 &&
          object2.x - object1.x < object1.width/2.5 + object2.width/9){
            return true;
        }
        else{
          return false;
        }
      }

      if(isTouching(jerry,tom) === true){
        tom.velocityX = 0;
      }
      else if(isTouching(jerry,tom) === false){
        tom.velocityX = -3;
      }
      

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
      tom.velocityX = -3;
      tom.addAnimation("tommy",tomone);
      jerry.addAnimation("jerryooo",jerryone);
  }

}
