const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var life = 3
var Score = 0
var engine, world;
var holder,ball,ground;
var stand1,stand2,stand3,stand4;
var ball;
var slingShot;
var polygon_img;
var ground
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
ground = new Ground (); 

  stand1 = new Stand(300,300,250,10);
  stand2 = new Stand(650,350,250,10);
  stand3 = new Stand(640,180,300,10);
  //level one
  block1 = new Block(230,275,30,40);
  //console.log(block1);
  block2 = new Block(260,275,30,40);
  block3 = new Block(290,275,30,40);
  block4 = new Block(320,275,30,40);
  block5 = new Block(350,275,30,40);
  block6 = new Block(380,275,30,40);
    
  //level two
  block8 = new Block(245,235,30,40);
  block9 = new Block(275,235,30,40);
  block10 = new Block(305,235,30,40);
  block11 = new Block(335,235,30,40);
  block12 = new Block(365,235,30,40);
  //level three
  block13 = new Block(260,205,30,40);
  block14 = new Block(290,205,30,40);
  block15 = new Block(320,205,30,40);
  block16 = new Block(350,205,30,40);
//level four
block17 = new Block(275,175,30,40)
block18 = new Block(305,175,30,40)
block19 = new Block(335,175,30,40)
//level 5
block20 = new Block(290,145,30,40)
block21 = new Block(320,145,30,40)
// level 6
block22 = new Block(305,115,30,40)

block23 = new Block(520,115,40,40)
block24 = new Block(560,115,40,40)
block25 = new Block(600,115,40,40)
block26 = new Block(640,115,40,40)
block27 = new Block(680,115,40,40)
block28 = new Block(720,115,40,40)
block29 = new Block(760,115,40,40)

block30 = new Block(560,75,40,40)
block31 = new Block(600,75,40,40)
block32 = new Block(640,75,40,40)
block33 = new Block(680,75,40,40)
block34 = new Block(720,75,40,40)

block35 = new Block(600,35,40,40)
block36 = new Block(640,35,40,40)
block37 = new Block(680,35,40,40)

block38 = new Block(640,0,40,40)

block39 = new Block(560,295,40,30)
block40= new Block(600,295,40,30)
block41= new Block(640,295,40,30)
block42= new Block(680,295,40,30)
block43= new Block(720,295,40,30)

block44= new Block(580,265,40,30)
block45= new Block(620,265,40,30)
block46= new Block(660,265,40,30)
block47= new Block(700,265,40,30)

block48= new Block(600,235,40,30)
block49= new Block(640,235,40,30)
block50= new Block(680,235,40,30)

block51= new Block(620,195,40,30)
block52= new Block(660,195,40,30)

block53= new Block(640,185,40,30)

block54= new Block(200,265,30,40)
block55= new Block(215,235,30,40)
block56= new Block(230,205,30,40)
block57= new Block(245,175,30,40)
block58= new Block(260,145,30,40)
block59= new Block(275,115,30,40)
block60= new Block(300,85,30,40)
block61= new Block(325,115,30,40)
block62= new Block(340,145,30,40)
block63= new Block(355,175,30,40)
block64= new Block(370,205,30,40)
block65= new Block(385,235,30,40)
block66= new Block(400,285,30,40)


polygon = Bodies.circle(100,200,50);
  World.add(world,polygon); 
slingShot = new SlingShot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 textSize(80)
 
  textSize(20);
  fill("lightyellow");
  text("Score:"+ Score,400,20)
  



imageMode(CENTER)
image(polygon_img, polygon.position.x,polygon.position.y,40,40)
slingShot.display();
  

ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  fill("yellow")
  block17.display();
  block18.display();
  block19.display();
  fill("purple")
  block20.display();
  block21.display();
  fill("brown")
  block22.display();
  fill("orange")
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  fill ("red")
  block30.display();
  block31.display();
  block32.display();
  block33.display();
  block34.display();
  fill ("magenta")
  block35.display();
  block36.display();
  block37.display();
  fill("black")
  block38.display();
  fill("white")
  block39.display();
  block40.display();
  block41.display();
  block42.display();
  block43.display();
  fill("blue")
  block44.display();
  block45.display();
  block46.display();
  block47.display();
  fill("white")
  block48.display();
  block49.display();
  block50.display();
  fill("blue")
  block51.display();
  block52.display();
  fill("white")
  block53.display();
  fill("black")
  block54.display();
  block55.display();
  block56.display();
  block57.display();
  block58.display();
  block59.display();
  block60.display();
  block61.display();
  block62.display();
  block63.display();
  block64.display();
  block65.display();
  block66.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();
  block37.score();
  block38.score();
  block39.score();
  block40.score();
  block41.score();
  block42.score();
  block43.score();
  block44.score();
  block45.score();
  block46.score();
  block47.score();
  block48.score();
  block49.score();
  block50.score();
  block51.score();
  block52.score();
  block53.score();
  block54.score();
  block55.score();
  block56.score();
  block57.score();
  block58.score();
  block59.score();
  block60.score();
  block61.score();
  block62.score();
  block63.score();
  block64.score();
  block65.score();
  block66.score();

    if(life<=0){
      background("black")
      fill("red")
      textSize(30)
      text("GAME OVER",400,200)
    }

  
  
  


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  
}
function mouseReleased(){
  slingShot.fly();}
  function keyPressed(){
    if(keyCode===32){
      slingShot.attach(polygon)
      life = life - 1
    }
   
  }
