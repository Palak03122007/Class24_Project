class Rubber {
    constructor(x, y, r) {
      var options = {
          'restitution':0.5,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("blue");
      ellipse(0,0,this.r);
      pop();
    }
  };