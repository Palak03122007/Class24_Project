const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1,rubber1,hammer1,iron1,ground;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer1 = new Hammer(100,100);
	ground = new Plane(600,height,1200,20);
	stone1 = new Stone(700,320,70,70);
	rubber1 = new Rubber(300,320,70);
  sand1 = new Sand(400,600,10);
  sand2 = new Sand(400,600,10);
  sand3 = new Sand(400,600,10);
  sand4 = new Sand(400,600,10);
  sand5 = new Sand(400,600,10);
  sand6 = new Sand(400,600,10);
  sand7 = new Sand(400,600,10);
  iron1 = new Iron(230,500,80,60);
  
}


function draw() {
  background(0,250,1000);
  Engine.update(engine);

  hammer1.display();
  ground.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron1.display();
 
}