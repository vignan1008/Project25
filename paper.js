class paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.0,
          'density':0.3
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.body.radius = radius;
      this.image=loadImage("paper1.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var radius=this.body.radius;
      //var angle = this.body.angle;
      push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      //rectMode(CENTER);
      //strokeWeight(10);
      //stroke("green");
      fill("blue");
      //ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,150,150);
      //ellipse(pos.x,pos.y,radius,radius);
      pop();
    }
  };
