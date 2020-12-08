
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stone1;
var chain1;
var boy, boyImg;
var ground1;

var tree1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var mangoPos,stonPos;


function preload()
{
	boyImg = loadImage("boy.png");
	
}

function setup() {
	createCanvas(800, 700);
	
	boy = createSprite(150,570);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	
	

	engine = Engine.create();
	world = engine.world;

	
	
	tree1 = new tree(580,430,100,20,20);
	mango1 = new mango(600,250,50);
	mango2 = new mango(550,300,50);
	mango3 = new mango(600,320,50);
	mango4 = new mango(670,350,50);
	mango5 = new mango(650,300,50);
	mango6 = new mango(750,380,50);
	mango7 = new mango(450,380,50);
	mango8 = new mango(530,350,50);	
	stone1 = new stone(150,570,50);
	chain1 = new chain(stone1.body,{x:100,y:500});
	ground1 = new ground(width/2,650,800,20);
	
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  chain1.display();
  ground1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone1.display();
  
  detectCollision(mango1,stone1);
  detectCollision(mango2,stone1);
  detectCollision(mango3,stone1);
  detectCollision(mango4,stone1);
  detectCollision(mango5,stone1);
  detectCollision(mango6,stone1);
  detectCollision(mango7,stone1);
  detectCollision(mango8,stone1);
 // detectCollision(stone1,mango1);
	keyPressed();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain1.fly();
}
function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.setPosition(stone1.body,{x:150,y:570});
		chain1.attach(stone1.body);
	}
}
function detectCollision(mango1,stone1){
mangoPos = mango1.body.position;
stonPos = stone1.body.position;

var distance = dist(stonPos.x,stonPos.y,mangoPos.x,mangoPos.y);
if(distance<=mango1.r+stone1.r){
	Matter.Body.setStatic(mango1.body,false);
}
}



