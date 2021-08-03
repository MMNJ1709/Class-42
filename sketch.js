var hasDocked=false
function preload(){
  bg=loadImage("spacebg.jpg")
issing=loadImage("iss.png")
scImg1=loadImage("spacecraft1.png")
scImg2=loadImage("spacecraft2.png")
scImg3=loadImage("spacecraft3.png")
scImg4=loadImage("spacecraft4.png")
}


function setup() {
  createCanvas(600,350);
  spaceCraft=createSprite(285, 240);
  spaceCraft.addImage(scImg1)
  spaceCraft.scale=0.15
  iss=createSprite(330,130)
  iss.addImage(issing)
  iss.scale=0.7
}

function draw() {
  background(bg);
  spaceCraft.addImage(scImg1)
  if(!hasDocked){
   //spaceCraft.x=spaceCraft.x+random(-1,1)
    if(keyDown("UP_ARROW")){
      spaceCraft.y=spaceCraft.y-2
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(scImg4)
      spaceCraft.x=spaceCraft.x-1
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(scImg3)
      spaceCraft.x=spaceCraft.x+1
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(scImg2) 
    }
  }  
  if(spaceCraft.y<=(iss.y+40)&&spaceCraft.x<=iss.x+70){
    hasDocked=true
    textSize(25)
    fill ("white")
    text("Docking Successfull",200,300)
  }
  drawSprites();
}