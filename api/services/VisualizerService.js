module.exports = {
  subscribeToTransactions: (req, res) => {
    sails.log('subscribing');
    ws.on('connection', function connection(ws) {
      ws.send({"op":"unconfirmed_sub"});
    });
  },

  listenForMessages: (req, res) => {
    sails.log('listening');
    ws.on('message', function incoming(data) {
      sails.log(data);
    });
  }
};
