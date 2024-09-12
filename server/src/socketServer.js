const { userJoin, getCurrentUser } = require("./helpers/socket");
//   const messageFormat = require("./helpers/sockets/messageFormat");

const listen = async (io) => {
  // Run when client connects
  io.on("connection", (socket) => {
    socket.on("onAboutToTrack", ({ userData, room }) => {
      const user = userJoin(socket.id, userData, room);

      socket.join(user.room);
    });

    socket.on("tracking", ({ userData, direction }) => {
      const user = getCurrentUser(userData.email);
      io.to(user.room).emit("trackingData", { direction });
    });
  });
};
module.exports = { listen };
