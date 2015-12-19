var express = require("express"),
  join = require('path').join,
  tilecache = require("./express-tile-cache"),
  app = express(),
  port = process.env.PORT || 3000;

var nyc = {
  tilesource: {
    urlTemplate: 'http://maps.nypl.org/warper/layers/tile/909',
    subdomains: ['a','b','c'],
    getTilePath: function(params) {
      return [params.z, params.x, params.y + ".png"].join("/");
    }
  },
  cachepath: "./cache"
}

app.use("/",tilecache(nyc));


app.listen(port);
console.log('Express app started on port ' + port);