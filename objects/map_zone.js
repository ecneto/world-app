module.exports = MapZone;

Zone = require('./zone');
var util = require('util');

var tile_types = 
  [
    {name: "Abyss", walkable: false, symbol: "+"},
    {name: "Wall", walkable: false, symbol: "X"},
    {name: "Grass", walkable: true, symbol: "_"}
  ];

util.inherits(MapZone, Zone);
function MapZone (name, map_number) {
  Zone.call(this, name);
  this.tiles = getTiles(map_number);
};

MapZone.prototype.step = function(){
  this.actors.forEach(function(actor){
    actor.step();
  });

  this.drawMap();
}

function getTiles(map_number){
  tiles = null;
  switch(map_number){
    default:
      tilesStrs = [
       "000000000000",
       "011111111110",
       "012222222210",
       "012212222210",
       "012222221210",
       "012122222210",
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
  if(x < 0 || y < 0 || y >= this.tiles.length || x >= this.tiles[0].length){
    return false;
  }
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

MapZone.prototype.drawMap = function(){
  console.log("====");
  for(var i = 0; i < this.tiles.length; i++){
    var lineStr = "";
    for(var j = 0; j < this.tiles[i].length; j++){
      // TODO: Actors should be mapped into a 2D array instead of nested loop.
      actorSymbol = null;
      this.actors.forEach(function (a){
        if(a.x!=undefined && a.y!=undefined){
          if(a.x==j && a.y==i){
            actorSymbol = a.getName().charAt(0);
          }
        }
      });
      if(actorSymbol==null){
        lineStr += tile_types[tiles[i][j]].symbol;
      } else {
        lineStr += actorSymbol;
      }
    }
    console.log(lineStr);
  }
}