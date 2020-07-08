var fs = require("fs");
console.log("\n *STARTING* \n");
var contents=fs.readFileSync("DOS_Skills.json");
var jsonContent=JSON.parse(contents);
console.log("Школа",jsonContent.aero);