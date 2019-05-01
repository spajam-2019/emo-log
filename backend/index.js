
const MoyaMoyaMeasurement = new require("./MoyaMoyaMeasurement");
const MoyaMoyaListener = new require("./MoyaMoyaListener");

{
    const io = require('socket.io')();
    const measurement = new MoyaMoyaMeasurement();
    io.listen(3000);
    io.on('connection', clientSocket => connection(io, clientSocket, measurement));
    setInterval(() => updateMoyaMoyaCount(io, measurement), 500);
    console.log("listen 3000 port")
}

function connection(io, clientSocket, measurement) {
    const listener = new MoyaMoyaListener(clientSocket.id);
    console.log("connected!");
    clientSocket.on("pressIn", () => { listener.IsMoyaMoya = true; updateMoyaMoyaCount(io, measurement) })
    clientSocket.on("pressEnd", () => { listener.IsMoyaMoya = false; updateMoyaMoyaCount(io, measurement) })
    clientSocket.on("disconnect", () => { measurement.RemoveListener(listener.Id); updateMoyaMoyaCount(io, measurement) })
    measurement.AddListener(listener.Id, listener);
    updateMoyaMoyaCount(io, measurement)
}

function updateMoyaMoyaCount(io, measurement) {
    io.emit("updateMoyaMoyaCount", measurement.GetMoyaMoyaCount());
    console.log("updateMoyaMoyaCount", measurement.GetMoyaMoyaCount())
}
