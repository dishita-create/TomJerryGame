var garden,gardenImg;
var cat;
var mouse;



function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png")
mouseImg1=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
catImg1=loadAnimation("images/cat1.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
mouseI=loadAnimation("images/mouse4.png")
catI=loadAnimation("images/cat4.png")






}

function setup(){
  createCanvas(1000,900);
 
  //create tom and jerry sprites here
garden=createSprite(10,400,1000,800)
  garden.addImage(gardenImg)
  garden.scale=1.4

  cat=createSprite(610,800,30,30)
  cat.addAnimation("still",catImg1)
  cat.scale=0.1

  mouse=createSprite(175,800,30,30)
  mouse.addAnimation("still",mouseImg1)
  mouse.scale=0.13

  //mouse.setCollider("rectangle",0,0,20,mouse.height);
//  cat.setCollider("rectangle",0,0,cat.width,cat.height);
// cat.setCollider("rectangle",0,0,20,cat.height);

}

function draw() {

  background("white");
  //Write condition here to evalute if tom and jerry collide
 
 //cat.debug=true

  if(cat.x-mouse.x<cat.width/12-mouse.width/12){
     
      
     
      mouse.addAnimation("laughing",mouseI)
     
      mouse.changeAnimation("laughing")

      cat.addAnimation("laughing",catI)
      cat.changeAnimation("laughing")
      cat.velocityX=0
     cat.x=250

  }
//mouse.debug=false
 
     

     
     
  

  drawSprites();
}

function keyPressed(){

//For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
 cat.velocityX=-2
 cat.addAnimation("walking",catImg2)
 cat.changeAnimation("walking")

 mouse.addAnimation("teasingMouse",mouseImg2)
 mouse.changeAnimation("teasingMouse")
 mouse.frameDelay=25

// cat.frameDelay=10
}

}
