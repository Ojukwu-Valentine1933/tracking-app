const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");
const { listen } = require("./socketServer");
const server = http.createServer(app);
const { PORT } = require("./config/dotEnv");
const mongooseConnection = require("./config/mongoose");

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(mongooseConnection());
  });

  listen(io);
};
startServer();
