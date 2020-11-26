class waste{
    constructor(x, y, radius, options){
        var options = {
       'isStatic' : false,
       'density' : 1.2,
       'friction ': 0.5,
       'restitution' : 0}
       this.body = Bodies.circle(100, 640, 5, options)
       World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(230, 230, 0);
        ellipse(0, 0, this.radius);
        pop();
      }
    }
