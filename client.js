const net = require('net');
//const args = process.args.slice(2);

const connection = net.createConnection({
  host: '127.0.0.1',
  port: 50541
});


connection.on("connect", ()=> {
  connection.setEncoding("utf8");
  console.log("connected")
  connection.write("Name: KLM",)
//  setTimeout(()=>{connection.write("Name: HEl",)}, 500)
//  setTimeout(()=>{connection.write("Move: down",)}, 50)
  // setInterval(() => {
  //   connection.write("Move: left",) 
  // }, 50)
  // setTimeout(()=>{connection.write("Move: down",)}, 50)

 
connection.on('data', (data) => {
  console.log(data.toString());
  connection.end();
});
});



 setTimeout(()=>{
   connection.end();
 },8000)