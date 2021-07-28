const net = require("net");
const stdin = process.stdin;
const connect = require('./client')

console.log("Connecting ...");
connect();


const setupInput = function () {
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)

  return stdin;
};

const handleUserInput =  (key) => {
  if (key === '\u0003') {
    console.log('Bye!')
    process.exit();
  }
}; 

setupInput()