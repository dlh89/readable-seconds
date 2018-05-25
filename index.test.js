const readableSeconds = require("./index");

console.log("Starting tests");

const resOne = readableSeconds(3660);
if (resOne !== "1 hour and 1 minute") {
  throw new Error("Expected response not received");
}

const resTwo = readableSeconds(0);
if (resTwo !== "") {
  throw new Error("Expected empty string");
}

const resThree = readableSeconds(60);
if (resThree !== "1 minute") {
  throw new Error("Expected response not received");
}
