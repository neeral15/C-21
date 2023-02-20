
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj =new Ground(600,700,1200,20);
	leftside =new Ground(950,650,20,120);
	righside =new Ground(1150,650,20,120);

	var ball_options={
		isStatic : false,
	     restitution : 0.3,
		 friction : 0,
		 density:1.2
	}

	ball = Bodies.circle(200,200,20,ball_options);
    World.add(world,ball);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  groundObj.display();
  leftside.display();
  righside.display();
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:80,y:-80});
	}
}


