const WebSocket = require('ws');
const ws = new WebSocket('wss://ws.blockchain.info/inv', {
  perMessageDeflate: false
});

module.exports = {
  vizualize: (req, res) => {
    sails.log(ws)
    VisualizerService.subscribeToTransactions(ws);
    VisualizerService.listenForMessages(ws);
    return res.send('Hi there!');
  },

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

