const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3004;

// Serve static index.html w bundle from ../public
app.use(express.static(path.resolve(__dirname + '/../public')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
