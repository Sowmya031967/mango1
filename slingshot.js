class slingshot{
    constructor(bodyA,p){
        var options = {
            bodyA: bodyA,
            pointB: p,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot1 = Constraint.create(options);
        World.add(world, this.slingshot1);
    }
    fly()
  {
this.slingshot1.bodyA = null;

  }

    display(){
       if(this.slingshot1.bodyA){
        var pointA = this.slingshot1.bodyA.position;
        var pointB = this.slingshot1.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}

