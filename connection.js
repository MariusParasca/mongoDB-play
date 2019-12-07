const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
  console.log('Connection has been made, now make fireworks...');
}).on('error', function (error) {
  console.log('Connection error:', error);
});

module.exports = mongoose;
