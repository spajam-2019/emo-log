const io = require('socket.io')();
io.on('connection', clientSocket => { 
    console.log("connected!");
    clientSocket.on("send",data=>{
        console.log("send:");
        console.log(data);
        io.emit(data.event,data.data);
    });
 });
io.listen(3000);
console.log("listen 3000 port")