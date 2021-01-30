const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand1, block2, block3, block6;
var stand2, block1, block4, block5, block7;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  // ground and stands
  ground = new Ground(600, 595, 1200, 10);
  stand1 = new Ground(500, 400, 250, 10);
  stand2 = new Ground(1000, 300, 200, 10);

  //level one 7 blocks
  block1 = new Block(410, 369, "cyan");
  block2 = new Block(440, 369, "cyan");
  block3 = new Block(470, 369, "cyan");
  block4 = new Block(500, 369, "cyan");
  block5 = new Block(530, 369, "cyan");
  block6 = new Block(560, 369, "cyan");
  block7 = new Block(590, 369, "cyan");

  //level two 5 blocks
  block8 = new Block(440, 320, "lightgreen");
  block9 = new Block(470, 320, "lightgreen");
  block10 = new Block(500, 320, "lightgreen");
  block11 = new Block(530, 320, "lightgreen");
  block12 = new Block(560, 320, "lightgreen");

  //level three 3 blocks 
  block13 = new Block(470, 270, "red");
  block14 = new Block(500, 270, "red");
  block15 = new Block(530, 270, "red");

  // Top
  block16 = new Block(500, 220, "gold");

  // level one 5 blocks
  block17 = new Block(940, 269, "yellow");
  block18 = new Block(970, 269, "yellow");
  block19 = new Block(1000, 269, "yellow");
  block20 = new Block(1030, 269, "yellow");
  block21 = new Block(1060, 269, "yellow");

  //level two 3 blocks
  block22 = new Block(970, 220, "navy");
  block23 = new Block(1000, 220, "navy");
  block24 = new Block(1030, 220, "navy");

  // Top
  block25 = new Block(1000, 170, "red");

  //polygon
  polygon = new Polygon(100, 200, 20);

  //slingshot
  slingshot = new Slingshot(polygon.body, {x: 100, y: 200});
}

function draw() {
  background("brown");
  Engine.update(engine);

  textSize(30);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 10, 50)

  //ground and stands display
  ground.display();
  stand1.display();
  stand2.display();

  //level one display
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //level two display
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  // level three display
  block13.display();
  block14.display();
  block15.display();

  // Top display
  block16.display();

  //level one display
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //level two display
  block22.display();
  block23.display();
  block24.display();

  // Top display
  block25.display();

  //polygon display
  polygon.display();

  //slingshot display
  //slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}