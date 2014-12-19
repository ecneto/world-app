module.exports = MapEvent;

function MapEvent (type, target, data) {
  this.type = type;
  this.target = target;
  this.data;
};

MapEvent.prototype.getType = function(){
  return this.type;
}
MapEvent.prototype.getTarget = function(){
  return this.target;
}
MapEvent.prototype.getData = function(){
  return this.data;
}