
var backg,gardenimg;
var cat, cat1,cat2,cat3,cat4;
var jerry,rat1,rat2,rat3,rat4;
function preload() {
    //load the images here
    cat4=loadImage("tomFour.png");
    cat3=loadImage("tomOne.png");
    cat2=loadAnimation("tomTwo.png","tomThree.png")
    gardenimg=loadImage("garden.png");
    rat4=loadImage("jerryFour.png");
    rat2=loadAnimation("jerryTwo.png","jerryThree.png");
    rat1=loadImage("jerryOne.png");

}

function setup(){
    createCanvas(1000,600);
    
    //create tom and jerry sprites here
    backg = createSprite(800,400);
    backg.addImage("gar",gardenimg);
    backg.x=backg.width/2;

    cat=createSprite(800,460,20,50);
    cat.addImage("TOMMY",cat3);
    cat.scale=0.2;
    cat.debug=false;
    cat.setCollider("rectangle",0,0,100,cat.height);

    jerry=createSprite(100,460,20,50);
    jerry.addImage("jerr",rat1);
    jerry.scale=0.2;
    jerry.debug=false;
    jerry.setCollider("rectangle",0,0,jerry.width,jerry.height);
}

function draw() {

    background("backg");
    //Write condition here to evalute if tom and jerry collide
if(cat.isTouching(jerry)){
        cat.addImage("catty",cat4);
        cat.changeImage("catty")
        jerry.addImage("ratty",rat4)
        jerry.changeImage("ratty");
        cat.velocityX=0;

      

}



text(mouseX+","+mouseY,10,45);

drawSprites();


}
keyPressed();



function keyPressed(){

    //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW&& cat.x>450){
      cat.velocityX=-5;
      cat.addAnimation("cat running",cat2)
      cat.changeAnimation("cat running")
      jerry.addAnimation("ratteasing",rat2);
      jerry.changeAnimation("ratteasing");
      
  }
  
  
  }
  

