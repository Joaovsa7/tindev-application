const express = require('express');
const routes = require('./routes');

const server = express();

server.use(routes);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});
