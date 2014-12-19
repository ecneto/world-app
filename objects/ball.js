module.exports = Ball;

EntityActor = require('./entity_actor');
var util = require('util');

util.inherits(Ball, EntityActor);
function Ball (name, x, y) {
  EntityActor.call(this, name, x, y);
  this.direction = 1;
};

Ball.prototype.step = function(){
  var next = this.nextSpace();
  if(this.zone.spaceAvailable(next[0], next[1])){
    this.move(next[0], next[1]);
    console.log(this.name +": Boing ("+this.x+", "+this.y+")");
  } else {
    this.direction = (this.direction + 1) % 4;
    console.log(this.name +": Smack");
  }

}

Ball.prototype.nextSpace = function(){
  var dx=0,dy=0;
  switch(this.direction){
    case 0:
      dy = -1;
      break;
    case 1:
      dx = 1;
      break;
    case 2:
      dy = 1;
      break;
    case 3:
      dx = -1;
      break;
  }
  return [this.x + dx, this.y + dy];
}