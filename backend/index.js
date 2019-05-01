
const MoyaMoyaMeasurement = new require("./MoyaMoyaMeasurement");
const MoyaMoyaListener = new require("./MoyaMoyaListener");

{
    const io = require('socket.io')();
    const measurement = new MoyaMoyaMeasurement();
    io.listen(3000);
    io.on('connection', clientSocket => Connection(io, clientSocket, measurement));
    console.log("listen 3000 port")
}

function Connection(io, clientSocket, measurement) {
    const listener = new MoyaMoyaListener(clientSocket.id);
    console.log("connected!");
    clientSocket.on("pressIn", () => { listener.IsMoyaMoya = true; UpdateMoyaMoyaLevel(io, measurement) })
    clientSocket.on("pressEnd", () => { listener.IsMoyaMoya = false; UpdateMoyaMoyaLevel(io, measurement) })
    clientSocket.on("disconnect", () => { measurement.RemoveListener(listener.Id); UpdateMoyaMoyaLevel(io, measurement) })
    measurement.AddListener(listener.Id, listener);
    UpdateMoyaMoyaLevel(io, measurement)
}

function UpdateMoyaMoyaLevel(io, measurement) {
    io.emit("updateMoyaMoyaLevel", measurement.GetMoyaMoyaLevel());
    console.log("updateMoyaMoyaLevel", measurement.GetMoyaMoyaLevel())
}
