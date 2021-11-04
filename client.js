const net = require('net');
const setupInput = require("./input");
const { IP, PORT } = require("./constants");

//const args = process.args.slice(2);

const connection = net.createConnection({
  host: IP,
  port: PORT
});


connection.on("connect", ()=> {
  connection.setEncoding("utf8");
  console.log("connected")
  connection.write("Name: KLM",)
  setupInput(connection);
//  setTimeout(()=>{connection.write("Name: HEl",)}, 500)
//  setTimeout(()=>{connection.write("Move: down",)}, 50)
//  setInterval(() => { connection.write("Move: left",)}, 50)
  
  connection.on('data', (data) => {
    console.log(data.toString());
    connection.end();
  });
});
