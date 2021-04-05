/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roof
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

roof = new Roof(400,50,600,20);
bobObject1 = new Bob(300,400);
bobObject2 = new Bob(350,400);
bobObject3 = new Bob(400,400);
bobObject4 = new Bob(450,400);
bobObject5 = new Bob(500,400);
rope1 = new Rope(bob1.body,roof.body,-100,0);
rope2 = new Rope(bob2.body,roof.body,-50,0);
rope3 = new Rope(bob3.body,roof.body,0,0)
rope4 = new Rope(bob4.body,roof.body,50,0)
rope5 = new Rope(bob5.body,roof.body,100,0)


}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  	}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}*/

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5, roof;
var rope1,rope2,rope3, rope4,rope5;
var world;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

roof = new Roof(400,50,600,20);
bob1 = new Bob(300,400);
bob2 = new Bob(350,400);
bob3 = new Bob(400,400);
bob4 = new Bob(450,400);
bob5 = new Bob(500,400);
rope1 = new Rope(bob1.body,roof.body,-100,0);
rope2 = new Rope(bob2.body,roof.body,-50,0);
rope3 = new Rope(bob3.body,roof.body,0,0)
rope4 = new Rope(bob4.body,roof.body,50,0)
rope5 = new Rope(bob5.body,roof.body,100,0)

	//Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("grey");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.position, {x: -30, y: -30});
	}
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}