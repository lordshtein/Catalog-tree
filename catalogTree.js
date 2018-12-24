var fs = require('fs');
var path = require('path');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var adress = process.argv[2];
var space = "  "

const catTree = function (adress, space) {
    
    var items = fs.readdirSync(adress)
        
    for (let i=0; i<items.length; i++) {
        var file = adress + '/' + items[i];
        var stats = fs.statSync(file)

        if (stats.isDirectory()) {
            console.log(space+path.basename(file));
            space=space+"  "
            catTree(file, space);
        } else {
            console.log(space+path.basename(file)+" "+stats["size"] + "  " + stats["mtime"]);
            
    }
};
};
  
catTree(adress, space)