#!/usr/bin/env node

const catalogTree = require("../lib/index.js");

let path = process.argv[2] || ".";

let endLevel = process.argv[3] || 1

// Print catalog tree in terminal to defined level
catalogTree(path, " ", endLevel);