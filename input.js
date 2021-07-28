const stdin = process.stdin;

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

module.exports = {setupInput};

