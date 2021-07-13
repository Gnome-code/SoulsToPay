class BG {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
          
      }
      rectMode(CENTER)
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage('underworld.png')
      this.visibility = false
      World.add(world, this.body);
     
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      image(this.image, player.body.position.x-512, -100, this.width,this.height)
      fill(11);
      
    }
  };