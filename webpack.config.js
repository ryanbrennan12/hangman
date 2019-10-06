const path = require('path');




module.exports = {
  entry: `./client/components/App.js`,
  output: {
    path: path.resolve(__dirname, '/client/dist'),
    filename: 'index_bundle.js'
  }
}