const fs = require("fs");
const path = require("path");
const colors = require("colors");
const moment = require("moment");
const prettyBytes = require("pretty-bytes");


module.exports = function(adress, space, endLevel) {
 var level=1

  const catTree = function(adress, space, level) {

    if (level <= endLevel) {
      let items = fs.readdirSync(adress);
      items.forEach(function(item, i, items) {
        let file = `${adress}/${items[i]}`;
        let stats = fs.statSync(file);

        if (stats.isDirectory()) {
          if (i === items.length - 1) {
            console.log(space + "└─" + colors.cyan(path.basename(file)));
            catTree(file, space + "  ", level + 1);
          } else {
            console.log(space + "├─" + colors.cyan(path.basename(file)));
            catTree(file, space + "│ ", level + 1);
          }
        }

        if (stats.isFile()) {
          let things =
            colors.green(path.basename(file)) +
            " " +
            colors.red(prettyBytes(stats["size"])) +
            "  " +
            moment(stats["mtime"]).fromNow();

          if (i === items.length - 1) {
            console.log(space + "└─" + things);
          } else {
            console.log(space + "├─" + things);
          }
        }
      });
    }
  };

  return catTree(adress, " ", level);

};
