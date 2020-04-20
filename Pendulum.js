class Pendulum {
    constructor(x,y,radius){
        var options = {
            rstitution : 0,
            friction : 0,
            density : 0
        }
        this.body = Bodies.rectangle(x,y,radius);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.radius);
    }
}