const connectionHandler = (io) => (socket) => {
    console.log("Connection d'un utilisateur")
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
}

module.exports = connectionHandler;
