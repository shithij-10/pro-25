
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground;

function preload()
{
	img=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	ball=new Ball(75,300);
	ground=new Ground(600,380,1200,20);
	side1=new Dustbin(900,310,20,100);
	side2=new Dustbin(1100,310,20,100);
side3=new Dustbin(1000,350,200,20);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  imageMode(CENTER)
  image(img,1000,250,250,250)
  ball.display();
  ground.display();
  
  drawSprites();
}
function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:85,y:-85}); 
		} 
	}




