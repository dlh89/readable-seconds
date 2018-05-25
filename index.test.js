const readableSeconds = require("./index");

console.log("Starting tests");

const resOne = readableSeconds(3660);
if (resOne !== "1 hour and 1 minute") {
  throw new Error("Expected '1 hour and 1 minute'");
}

const resTwo = readableSeconds(0);
if (resTwo !== "") {
  throw new Error("Expected empty string");
}

const resThree = readableSeconds(60);
if (resThree !== "1 minute") {
  throw new Error("Expected '1 minute'");
}

const resFour = readableSeconds(3690);
if (resFour !== "1 hour, 1 minute and 30 seconds") {
  throw new Error(
    "Expected 3 units in response, '1 hour, 1 minute and 30 seconds'"
  );
}

const resFive = readableSeconds(3690, 2);
if (resFive !== "1 hour and 1 minute") {
  throw new Error("Expected two units in response, '1 hour and 1 minute'");
}

const resSix = readableSeconds(60, 2);
if (resSix !== "1 minute") {
  throw new Error("Expected one unit response, '1 minute'");
}

const resSeven = readableSeconds(31536000);
if (resSeven !== "1 year") {
  throw new Error("Expected '1 year'");
}
