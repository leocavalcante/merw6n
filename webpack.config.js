module.exports = {
    context: __dirname + '\\src',
    entry: {
        app: './app/entry.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'},
            {test: /\.js$/,  loader: 'babel-loader', exclude: /node_modules/}
        ]
    }
};