module.exports = MapZone;

Zone = require('./zone');
var util = require('util');

var tile_types = 
  [
    {name: "Abyss", walkable: false},
    {name: "Wall", walkable: false},
    {name: "Grass", walkable: true}
  ];

util.inherits(MapZone, Zone);
function MapZone (name, map_number) {
  Zone.call(this, name);
  this.tiles = getTiles(map_number);

  console.log(tile_types[0].walkable);
  console.log(tile_types[2].name);
};

function getTiles(map_number){
  tiles = null;
  switch(map_number){
    default:
      tilesStrs = [
       "000000000000",
       "011111111110",
       "012222222210",
       "012222222210",
       "012222222210",
       "012222222210",
       "012222222110",
       "011112211110",
       "000012210000"
       ];
  }

  tiles = [];
  for(var i = 0; i < tilesStrs.length; i++){
    row = [];
    for(var j = 0; j < tilesStrs[0].length; j++){
      row.push(Number(tilesStrs[i].charAt(j)));
    }
    tiles.push(row);
  }

  return tiles;
}

MapZone.prototype.spaceAvailable = function spaceAvailable(x, y){
  if(!tile_types[tiles[y][x]].walkable){
    return false;
  }
  this.actors.forEach(function (a){
    if(a.x!=undefined && a.y!=undefined){
      if(a.x==x && a.y==y){
        return false;
      }
    }
  });
  return true;
}