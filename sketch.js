
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var stone1,slingshot1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)
	tree1 = new tree(450,170,350,550);
	boy1 = new boy(130,570,150,170);
	mango1 = new mango(600,320,40);
	mango2 = new mango(660,390,40);
	mango3 = new mango(690,300,30);
	mango4 = new mango(560,390,30);
	mango5 = new mango(560,220,40);
	mango6 = new mango(700,340,50);
	mango7 = new mango(500,340,50);
    stone1 = new stone(130,570,60,80);
	slingshot1 = new slingshot(stone1.body,{x:130,y:570});
	}

 
function draw() {
  background("lightgrey");
  Engine.run(engine);
  ground.display();
  tree1.display();
  boy1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone1.display();
  slingshot1.display();

detectCollision(stone1,mango1)
detectCollision(stone1,mango2)
detectCollision(stone1,mango3)
detectCollision(stone1,mango4)
detectCollision(stone1,mango5)
detectCollision(stone1,mango6)
detectCollision(stone1,mango7)


}
function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	
	}
	
	
	function mouseReleased(){
	
	slingshot1.fly();
	
	}

function detectCollision(Lstone,Lmango){
mangoBodyPosition = Lmango.body.position
stoneBodyPosition = Lstone.body.position

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=Lmango.r+Lstone.width/2)
{
	Matter.Body.setStatic(Lmango.body,false)
}
}










