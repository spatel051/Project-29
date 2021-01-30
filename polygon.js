class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'length': 5
        }
        this.body = Bodies.circle(x, y, 50, 50);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        //push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //pop();
      }
}