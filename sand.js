class Sand {
    constructor(x, y, r) {
      var options = {
          'restitution':1.3,
          'friction':12,
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
      fill("pink");
      strokeWeight(4);
      stroke("black")
      ellipse(0,0,this.r);
      pop();
    }
  };