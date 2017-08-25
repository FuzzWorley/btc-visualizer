const WebSocket = require('ws');
const ws = new WebSocket('wss://ws.blockchain.info/inv', {
  perMessageDeflate: false
});

module.exports = {
  vizualize: (req, res) => {
    sails.log(ws)
    VisualizerService.listenForMessages(ws);
    ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
    return res.send('Hi there!');
  }
};

