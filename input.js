const stdin = process.stdin;
let connection;

const setupInput = function (conn) {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput =  (key) => {

  if(key === 'w') {
    connection.write('Move: up')
  }

  if(key === 'a') {
    connection.write('Move: left')
  }

  if(key === 's') {
    connection.write('Move: down')
  }

  if(key === 'd') {
    connection.write('Move: right')
  }

  if(key === 'q') {
    connection.write('Say: Gotcha!')
  }


  if (key === '\u0003') {
    console.log('Bye!')
    process.exit();
  }
}; 


module.exports = {setupInput};

