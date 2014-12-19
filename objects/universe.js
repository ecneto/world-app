module.exports = Universe;

function Universe (name) {
  this.name = name;
  this.zones = [];
  this.interval = 50;
};

Universe.prototype.getName = function (){
  return this.name;
};

Universe.prototype.addZone = function (zone){
  zone.universe = this;
  this.zones.push(zone);
}

Universe.prototype.start = function (){
  var self = this;
  self.set = setInterval(function(){
    console.time('step');
    self.zones.forEach(function(zone){
      zone.step();
    });
    console.timeEnd('step');
  }, this.interval);
}