module.exports = FizzBuzzActor;

Actor = require('./actor');

FizzBuzzActor.prototype.__proto__ = Actor.prototype;
function FizzBuzzActor (name) {
  Actor.call(this, name);
  this.name = name;
  this.counter = 0;
};

FizzBuzzActor.prototype.step = function(){
  // Do Something.
  this.counter ++;
  var i3 = this.counter%3==0;
  var i5 = this.counter%5==0;
  var str = "";
  if(i3)
    str += "Fizz";
  if(i5)
    str += "Buzz";
  if(str==""){
    str = this.counter;
  }
  console.log(this.name + " of " + this.zone.getName() + " says, \"" + str + "\"");
}