#!/usr/bin/env node

const catalogTree = require('../lib/index.js');

if (process.argv.length <= 2) {
 console.log("Usage: " + __filename + " path/to/directory");
 process.exit(-1);
}
 
if (!process.argv[3]) {
 endLevel = 1;
}

// Print catalog tree in terminal to defined level 
catalogTree(process.argv[2]," ",process.argv[3]);