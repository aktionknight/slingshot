const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(900,250,200,20);
    ground2 = new Ground(600,390,1200,20);
    bird = new Bird(100,200)
    slingshot = new Slingshot(bird.body,{x:100,y:200});
    box = new Box(810,230,30,30)
    box1 = new Box(950,230,30,30)
    box2 = new Box(880,230,30,30)
    box3 = new Box(910,230,30,30)
    box4 = new Box(850,230,30,30)
    band = new Box(bird.x - 50,200,5,10)
    band2 = new Box(bird.x + 30,200,5,10)
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    ground2.display();
    bird.display();
    slingshot.display();
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    shooter = rect(100,200,40,40)
    pole = rect(100,300,10,160)


    if(bird.x < 100)
    {
        band.display()
    }
   
}

function mouseDragged()
{
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
slingshot.fly();
}

function keyPressed (){
    if(keyCode === 32)
    {
        slingshot.attach(bird.body);
        
    }
}