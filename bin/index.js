#!/usr/bin/env node

const dispatcher = require('./../lib/dispatcher');

// Parse given arguments to map to action to manager
dispatcher.parse(process.argv);
