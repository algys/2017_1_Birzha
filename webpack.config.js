let path = require('path');

module.exports = {
    entry: './public/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/bin')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    watch: true,
    cache: false
};