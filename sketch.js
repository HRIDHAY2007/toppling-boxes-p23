const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;

var box1, box2;
var ground;

function setup() {
  createCanvas(800,400);
  
  //creating engine and world
  engine = Engine.create();
  myworld = engine.world;

  var options = {
    isStatic : true,
    friction : 0.05
  };
  
   ground=new Ground(400,390,800,20)

  //creating an object from the class
  box1 = new Box(240, 100, 50, 100);
  box2 = new Box(200, 300, 50, 50);

}

function draw() {
  background(0);  
  Engine.update(engine);   

  ground.display();
 
  //calling the function from the class
  box1.display();
  box2.display();

}