class plank{
    constructor(x,y,width,height,options){
        var options = {
            restitution : 0,
            friction : 1
         }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;  
        World.add(world, plank)  
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("red")
        fill(255, 0, 0);
        rect(0, 0, this.width, this.height);
        pop();
      
}}