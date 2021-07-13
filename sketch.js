const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var player, playz, plat, fplat, bg, bgi, bge, bgei, bgei2, bats, batsGroup, bat1, bat2, bat3, bat4;

var gamestate, blocc
var gro, gro1, gro2, gro3, gro4, gro5, gro6, gro7, gro8, gro9, gro10, gro11, gro12, gro13, gro14, gro15, gro16, gro17, gro18, gro19, gro20, gro21, gro22, gro23, gro24, gro25, gro26, gro27, gro
function preload()
{
  bat1 = loadImage("bats/batflap.png")
  bat2 = loadImage("bats/batflap2.png")
  bgei = loadImage('loss.png')
  bgei2 = loadImage('win.png')
  batsGroup = new Group()
}

function setup() {
	createCanvas(960, 755);
	blocc = createSprite(0,0,50000000,50000000)
  blocc.visible = false
  blocc.setColor = "black"
  gamestate = "PLAY"
	engine = Engine.create();
	world = engine.world;
  
	bg = new BG(0, -3000,1024,858)
 
  
	player = new Player(300, 500, 95, 95)
	player.debug = true
	bge = createSprite(player.body.position.x, 300, 1000, 1000)
    bge.addImage(bgei)
  bge.visible = false

  bge2 = createSprite(player.body.position.x, 300, 1000, 1000)
    bge2.addImage(bgei2)
  bge2.visible = false
  
	gro = new Ground(300,700,96*2,30.5)
  gro1 = new Ground(800,600,96*2,30.5)
  gro2 = new Ground(1300,700,96*2,30.5)
  gro3 = new Ground(1800,400,96*2,30.5)
  gro4 = new Ground(2800,600,96*2,30.5)
  gro5 = new Ground(3800,500,96*2,30.5)
  gro6 = new Ground(4800,300,96*2,30.5)
  gro7 = new Ground(5800,700,96*2,30.5)
  gro8 = new Ground(7800,300,96*2,30.5)
  gro9 = new Ground(9800,600,96*2,30.5)
  gro10 = new Ground(11800,700,96*2,30.5)
  gro11 = new Ground(13800,400,96*2,30.5)
  gro12 = new Ground(15800,300,96*2,30.5)
  gro13 = new Ground(17800,600,96*2,30.5)
	gro14 = new Ground(19800,600,96*2,30.5)
  gro15 = new Ground(21800,700,96*2,30.5)
  gro16 = new Ground(23800,400,96*2,30.5)
  gro17 = new Ground(25800,300,96*2,30.5)
  gro18 = new Ground(27800,700,96*2,30.5)
  gro19 = new Ground(29800,300,96*2,30.5)
  gro20 = new Ground(31800,300,96*2,30.5)
  gro21 = new Ground(33800,500,96*2,30.5)
  gro22 = new Ground(35800,600,96*2,30.5)
  gro23 = new Ground(37800,700,96*2,30.5)
  gro24 = new Ground(39800,500,96*2,30.5)
  gro25 = new Ground(41800,400,96*2,30.5)
  gro26 = new Ground(43800,600,96*2,30.5)
  gro27 = new Ground(45800,300,96*2,30.5)
	
	Engine.run(engine);
  
}


function draw() {
 
 
	
if (camera.position.x + width / 2 > gro.body.position.x + gro.body.width / 2) {
	gro.body.position.x = camera.position.x;
}
  camera.position.x = player.body.position.x
  rectMode(CENTER);
  //Matter.Body.setVelocity(bg.body, {x:7, y:0});
  
  if(gamestate === "PLAY"){
    
  background(255);
  bg.display()
  player.display();
  gro.display();
  gro1.display();
  gro2.display();
  gro3.display();
  gro4.display();
  gro5.display();
  gro6.display();
  gro7.display();
  gro8.display();
  gro9.display();
  gro10.display();
  gro11.display();
  gro12.display();
  gro13.display();
  gro14.display();
  gro15.display();
  gro16.display();
  gro17.display();
  gro18.display();
  gro19.display();
  gro20.display();
  gro21.display();
  gro22.display();
  gro23.display();
  gro24.display();
  gro25.display();
  gro26.display();
  gro27.display();
  drawSprites();
  player.debug = true
  if(player.body.speed > 40){
	  player.body.speed = 0
  }
  
  //if(player.body.position.y < 338){
	//player.body.position.y = player.body.position.y + 1
 // }
      player.depth = bg.depth
      player.depth = player.depth + 1

      
      if (frameCount % 75 === 0) {
        bats = createSprite(round(random(camera.position.x -700, camera.position.x -600)), round(random(600,800)), 25, 25);
        bats1 = createSprite(round(random(camera.position.x -700, camera.position.x -600)), round(random(600,800)), 25, 25);
        bats2 = createSprite(round(random(camera.position.x -700, camera.position.x -600)), round(random(600,800)), 25, 25);
        bats3 = createSprite(round(random(camera.position.x -700, camera.position.x -600)), round(random(600,800)), 25, 25);
        bats4 = createSprite(round(random(camera.position.x -700, camera.position.x -600)), round(random(600,800)), 25, 25);
        bats.velocityX = 16;
        bats1.velocityX = 16;
        bats2.velocityX = 16;
        bats3.velocityX = 16;
        bats4.velocityX = 16;

        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: bats.addImage(bat1);
            break;
            case 2: bats.addImage(bat2);
            break;
        }
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: bats1.addImage(bat1);
            break;
            case 2: bats1.addImage(bat2);
            break;
        }
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: bats2.addImage(bat1);
            break;
            case 2: bats2.addImage(bat2);
            break;
        }
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: bats3.addImage(bat1);
            break;
            case 2: bats3.addImage(bat2);
            break;
        }
        var rand = Math.round(random(1,2));
        switch(rand){
            case 1: bats4.addImage(bat1);
            break;
            case 2: bats4.addImage(bat2);
            break;
        }
        batsGroup.add(bats);
        batsGroup.add(bats1);
        batsGroup.add(bats2);
        batsGroup.add(bats3);
        batsGroup.add(bats4);
        batsGroup.lifetime = 1000
 }
 playz = createSprite(player.body.position.x, player.body.position.y, 95, 95)
 playz.visible = false
 if(playz.isTouching(batsGroup) || playz.y >800){
   gamestate = "END"
 }
if(playz.x >= 45800){
  gamestate = "WIN"
}


  }
  if(gamestate === "END"){
    
    drawSprites();
    batsGroup.visible = false
    blocc.visible = true
    bge.visible = true
    bge.x = player.body.position.x
    Matter.Body.setVelocity(player.body, {x:0, y:0});
    

  }
  if(gamestate === "WIN"){
    
    drawSprites();
    batsGroup.visible = false
    blocc.visible = true
    bge2.visible = true
    bge2.x = player.body.position.x
    Matter.Body.setVelocity(player.body, {x:0, y:0});
    

  }

}



function keyPressed(){

	if(keyCode === UP_ARROW && player.body.position.y > 346 && gamestate == "PLAY"){
        Matter.Body.setVelocity(player.body, {x:player.body.velocity.x, y:-13});
        //player.body.position.y = player.body.position.y - 10
        
      }
      
      if(keyCode === LEFT_ARROW && player.body.speed <= 5 && gamestate == "PLAY"){
        player.PlayerMovementL()
      }
      
      if(keyCode === RIGHT_ARROW && player.body.speed <= 5 && gamestate == "PLAY"){
        player.PlayerMovementR()
      }
  }