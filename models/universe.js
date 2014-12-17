module.exports = Universe;

function Universe (name) {
  this.name = name;
  this.zones = [];
};

Universe.prototype.getName = function (){
  return this.name;
};

Universe.prototype.addZone = function (zone){
  this.zones.push(zone);
}