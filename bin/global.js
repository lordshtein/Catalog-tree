#!/usr/bin/env node

const catalogTree = require("../lib/index.js");

if (process.argv.length <= 2) {
  console.log("Usage: " + __filename + " path/to/directory");
  process.exit(-1);
}
let endLevel = process.argv[3] || 1

// Print catalog tree in terminal to defined level
catalogTree(process.argv[2], " ", endLevel);