class Umbrella {
  constructor(x,y){
      var options = {
          isStatic: true,
      }
      this.image = loadImage("walking_1.png");
      this.umbrella = Bodies.circle(x,y,60,options);
      this.radius = 50;
      World.add(world, this.umbrella)
  }

  display(){
      var pos = this.umbrella.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y+80,400,400);
  }
}