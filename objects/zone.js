module.exports = Zone;

function Zone (name) {
  this.name = name;
  this.actors = [];
};

Zone.prototype.getName = function (){
  return this.name;
};

Zone.prototype.addActor = function (actor){
  actor.zone = this;
  this.actors.push(actor);
}

Zone.prototype.step = function(){
  this.actors.forEach(function(actor){
    actor.step();
  });
}