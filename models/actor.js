module.exports = Actor;

function Actor (name) {
  this.name = name;
};

Actor.prototype.getName = function (){
  return this.name;
};

Actor.prototype.step = function(){
  // Do Something.
}