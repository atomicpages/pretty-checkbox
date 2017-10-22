var c = require("../code/snippets");
var f = require("../code/fontLibraries");
var s = require("../code/svgLibraries");

module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

    html: {
      dataFile: null,
      dataFunction:function(){
        c.svgLibraries=s;
        c.fontIconLibraries=f;
        return c
      }
    },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: false
  }
}
