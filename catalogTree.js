const fs = require('fs');
const path = require('path');
const colors = require('colors');
const moment = require('moment')
const prettyBytes = require('pretty-bytes');

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
 
var adress = process.argv[2];
var space = " ";
var level = process.argv[3];

const catTree = function (adress, space) {    // сделать через модуль экспорт
    
    var items = fs.readdirSync(adress)
        
    for (let i=0; i<items.length; i++) {   //forEach вместо for
        
        var file = adress + '/' + items[i];  //  `${address}/${items[i]}`
        let stats = fs.statSync(file)

        if (stats.isDirectory()) { 
            if (i===items.length-1) {console.log(space+"└"+colors.cyan(path.basename(file)));
            catTree(file, space+"  ")
             } else {console.log(space+"├"+colors.cyan(path.basename(file)));
             catTree(file, space+"│ ");
            }
        } 
        if (stats.isFile()) {
            if (i===items.length-1) {console.log(space+"└"+colors.green(path.basename(file)+" "+prettyBytes(stats["size"]) + "  " + moment(stats["mtime"]).fromNow())) ;
            } else {
                console.log(space+"├"+colors.green(path.basename(file)+" "+prettyBytes(stats["size"]) + "  " + moment(stats["mtime"]).fromNow())) ;   
            }
        }
    };
};

catTree(adress, space)