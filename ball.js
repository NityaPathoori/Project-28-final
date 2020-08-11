class Ball {
    constructor(x,y,radius)  {

    var options = {
        isStatic:false,
        restitution:0.3,
        friction:1,
        density:1,
    }
this.body = Bodies.circle(x,y,radius/2,options);
World.add (world,this.body);
this.radius = radius;

this.image = loadImage("paper.png");
    }
    
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
       pop();
    }
}