const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine , box1, box2, box3, box4, box5
var ground
var ball
function setup() {
  createCanvas(800,800);
  myEngine= Engine.create();
  myWorld = myEngine.world;

box1 = new Box(380,200,50,100)
box2 = new Box(400,400,50,50)
box3 = new Box(500,200,50,50)
box4 = new Box(700,200,50,50)
box5 = new Box(300,200,50,50)
ground = new Ground(400,790,800,10)


}

function draw() {
  background("black");  
  Engine.update(myEngine)
  box1.display()
  ground.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
 
}




