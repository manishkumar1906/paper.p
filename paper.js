class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,density:1.2,restitution:0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius*2
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };