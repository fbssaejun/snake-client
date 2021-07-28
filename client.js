const net = require('net')
const {IP, PORT, USERNAME} = require("./constants")

const connect = function () {
  const conn = net.createConnection(
    {
    port: PORT,
    host: IP
  }
);

  conn.on("connect", () => {
    console.log(`Successfully connected!`)
    conn.write(`Name: ${USERNAME}`)
  });

  conn.on("connect", () => {
    conn.write("Say: TOR");
  });

  conn.setTimeout(1000);
  conn.on('timeout', () => {
    conn.write('Say: EAT!');
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect};