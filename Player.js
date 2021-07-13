class Player{
    constructor(x, y, height, width) {
      var options={
        isStatic:false,
        restitution:0.3,
        friction:200,
        resistance:12300,
        density:1
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        this.animation = loadAnimation("g1.png","g2.png");
        World.add(world, this.body);
        //Matter.Body.setVelocity(this.body, {x:this.body.velocity.x, y:-});
      }
      display(){
        fill(189, 252, 247);
      push();
      translate(this.body.position.x, this.body.position.y)
      animation(this.animation, 0, 0, this.width, this.height);
      
      pop();
      }
      PlayerMovementL(){
        Matter.Body.setVelocity(player.body, {x:-7, y:0});
      }
      PlayerMovementR(){
        Matter.Body.setVelocity(player.body, {x:7, y:0});
      
    }
  }