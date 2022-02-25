const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine , world
var bg , snowImage
var fall=[]
function preload () {
   snowImage = loadImage("snow5.webp")
   bg = loadImage("snow1.jpg")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
    world= engine.world
  
}

function draw() {
  background(bg);  
Engine.update(engine)

if(frameCount%5===0){
  fall.push(new Snow())
}
for(var i = 0; i<fall.length;i++){
  fall[i].display()
}
  drawSprites();
}