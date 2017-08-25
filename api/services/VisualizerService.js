module.exports = {
  subscribeToTransactions: (ws, req, res) => {
    sails.log('subscribing');
    ws.on('open', function open(ws) {
      ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
    });
  },

  listenForMessages: (ws, req, res) => {
    sails.log('listening');
    ws.on('message', function incoming(data) {
      sails.log(data);
    });
  }
};
