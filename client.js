const net = require('net')

const connect = function () {
  const conn = net.createConnection({
    port: '50542',
    host: '135.23.223.133'}
    
  );
  conn.setEncoding('utf8');


  conn.on("connect", () => {
    console.log(`Successfully connected!`)
    conn.write(`Name: ANK`)
  });




  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;