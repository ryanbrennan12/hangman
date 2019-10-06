var path = require('path');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/public')
    },
    devServer: {
        contentBase: './public',
        port: 3030
    }
};

// path: __dirname + '/public',
// publicPath: '/',
// filename: 'bundle.js'