const net = require('net')

const connect = function () {
  const conn = net.createConnection({
    port: '50542',
    host: '135.23.223.133'
  });

  const name = "Anthony"
  conn.on("connect", () => {
    console.log(`${name} is connected!`)
  });

  conn.on("data", (data) => {
    console.log(data)
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;