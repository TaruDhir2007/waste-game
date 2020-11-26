
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var plank1,plank2,plank3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new waste(100, 640, 5);
	plank1 = new plank(470,620, 20, 100);
	plank2 = new plank(720,620, 20, 100);
	plank3 = new plank(600,650, 250, 20);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  plank1.display();
  plank2.display();
  plank3.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(wasteObject.body, wasteObject.body.position, {x:85, y:-85})
	}
}


