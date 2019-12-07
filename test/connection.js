const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
  console.log('Connection has been made, now make fireworks...');
}).on('error', (error) => {
  console.log('Connection error', error)
})