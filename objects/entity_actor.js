module.exports = EntityActor;

Actor = require('./actor');
MapEvent = require('./map_event');
var util = require('util');

util.inherits(EntityActor, Actor);
function EntityActor (name, x, y) {
  Actor.call(this, name);
  this.x = x;
  this.y = y;
};

EntityActor.prototype.move = function(newx, newy){
  this.x = newx;
  this.y = newy;
  var evt = new MapEvent("move", this, {x: this.x, y: this.y, newx: newx, newy: newy});
  this.events.push(evt);
}
