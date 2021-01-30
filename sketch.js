const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;

var thunderCreatedFrame=0;
var boy, boyImg;
var night, nightImg;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    boyImg = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png",
    "walking_6.png","walking_7.png","walking_8.png");
    nightImg = loadImage("night.jpg")
}

function setup(){
    night = createSprite(width/2, height/2, 50, 50)
    night.addImage(nightImg);
    night.velocityX = -4;
    boy = createSprite(650, 500, 20, 20);
    boy.addAnimation("walk", boyImg);
    boy.scale = 0.5;

    
    engine = Engine.create();
    world = engine.world;

    createCanvas(1300,690);
    umbrella = new Umbrella(650,450);

    
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,1500), random(0,800)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(0); 
    drawSprites();
    if (night.x < 0){
        night.x = night.width/2;
      }

   
    rand = Math.round(random(1,4));
    if(frameCount%40===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(1400,130), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.5)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    for(var i = 1; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    
}  