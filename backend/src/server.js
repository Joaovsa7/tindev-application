const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://tindev:tindev@cluster0-rsntu.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true})

server.use(cors())
server.use(express.json());
server.use(routes);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});
