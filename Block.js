class Block{
    constructor(x, y, color) {
        var options = {
            restitution: 0.4,
            friction: 0.5,
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, 30, 50, options);
        this.width = 30;
        this.height = 50;
        this.color = color;
        World.add(world, this.body);
      }

      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}