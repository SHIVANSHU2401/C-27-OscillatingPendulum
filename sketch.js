const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paddle;
var pendulum;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  paddle = new Paddle(200,200,50,50);
  pendulum = new Pendulum(300,300,30);

}

function draw() {
  background("white");  
  Engine.update(engine);

  paddle.display();
  pendulum.display();

  drawSprites();
}