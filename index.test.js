const readableSeconds = require("./index.js");

console.log("Starting tests");

const resOne = readableSeconds(3660);
if (resOne !== "1 hour and 1 minute") {
  throw new Error("Expected response not received");
}
