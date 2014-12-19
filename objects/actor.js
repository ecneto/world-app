module.exports = Actor;

function Actor (name) {
  this.name = name;
  this.events = [];
};

Actor.prototype.getName = function (){
  return this.name;
};

Actor.prototype.step = function(){
  // Do Something.
}

Actor.prototype.addEvent = function(evt){
  this.events.push(evt);
}

Actor.prototype.popEvents = function(){
  ary = this.events.slice(0);
  this.events = [];
  return ary;
}