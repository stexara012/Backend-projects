const WebSocket = require("ws");
const si = require("systeminformation");

const wss = new WebSocket.Server({ port: 8080 });

let fanMode = "Silent";

wss.on("connection", ws => {
  console.log("Client connected");

  ws.on("message", msg => {
    const data = JSON.parse(msg);
    if (data.type === "SET_MODE") {
      fanMode = data.mode;
    }
  });

  const interval = setInterval(async () => {
    const cpu = await si.currentLoad();
    const mem = await si.mem();
    const temp = await si.cpuTemperature();

    ws.send(JSON.stringify({
      type: "STATS",
      fanMode,
      cpu: Math.round(cpu.currentLoad),
      ram: Math.round((mem.used / mem.total) * 100),
      temp: temp.main || 0
    }));
  }, 1000);

  ws.on("close", () => clearInterval(interval));
});

console.log("Backend running on ws://localhost:8080");
