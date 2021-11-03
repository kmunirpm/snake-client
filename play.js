const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',// IP address here
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });


  return conn;
};

console.log("Connecting ...");
connect();
