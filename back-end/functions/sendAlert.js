const {socket} = require('../socket');

module.exports = (type='', tittle='',value='') => {
  socket.io.emit('alert', {type, tittle, value});
}