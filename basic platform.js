class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      rectMode(CENTER)
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage('activev.png')
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //fill(11);
      image(this.image, pos.x-96, pos.y-30.5, 96*2, 61*2)
      //rect(pos.x, pos.y, this.width, this.height);
    }
  };