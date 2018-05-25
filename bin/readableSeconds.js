#!/usr/bin/env node

const argv = require("yargs").argv;
const readableSeconds = require("../index.js");

console.log(
  readableSeconds(typeof argv.seconds === "number" ? argv.seconds : undefined)
);
