const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21;
var ball;
var myEngine,myWorld;
var rope;

function setup() {
  createCanvas(1500,700);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground= new Ground(750,690);
  
  color = "pink";
  box1 = new Box(1000,100,color);
  box2 = new Box(1000,100,color);
  box3 = new Box(1000,100,color);
  box4 = new Box(1000,100,color);
  box5 = new Box(1000,100,color);
  box6 = new Box(1000,100,color);
  box7 = new Box(1000,100,color);

  color = "lightblue";
  box8 = new Box(900,100,color);
  box9 = new Box(900,100,color);
  box10 = new Box(900,100,color);
  box11 = new Box(900,100,color);
  box12 = new Box(900,100,color);
  box13 = new Box(900,100,color);
  box14 = new Box(900,100,color);

  color = "lightyellow";
  box15 = new Box(800,100,color);
  box16 = new Box(800,100,color);
  box17 = new Box(800,100,color);
  box18 = new Box(800,100,color);
  box19 = new Box(800,100,color);
  box20 = new Box(800,100,color);
  box21 = new Box(800,100,color);

  ball = new Ball(200,200,40,40);

  rope = new Rope(ball.body,{x:700,y:50});

}

function draw() {
  Engine.update(myEngine);
  background(180); 

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  ball.display();

  rope.display();
 
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  
  Matter.body.applyForce(ball.body,ball.body.position,{x:80,y:-80});
}