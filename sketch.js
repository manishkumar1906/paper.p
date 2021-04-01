
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box1,box2,box3,paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground (width/2,height.width,20)
box1 = new Dustbin (500,680,200,20)
box2 = new Dustbin (400 ,630 ,20 ,100)
box3 = new Dustbin (600 ,630 ,20,100)
paper = new Paper (50,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  paper.display()
}


function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


