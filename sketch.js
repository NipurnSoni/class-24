const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,300,70,70);
    box2 = new Box(700,300,70,70);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(590,300);
    log1=new Log(600,200,300,PI/2);
    
    box3 = new Box(500,150,70,70);
    box4 = new Box(700,150,70,70);
    pig2 = new Pig(590,150);
    log2=new Log(600,140,300,PI/2);

    box5= new Box(600,120,70,70);
    log3= new Log(520,90,150,PI/4);
    log4= new Log(600,90,150,-PI/4);
    bird=new Bird(300,500)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();

    ground.display();
}