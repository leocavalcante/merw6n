module.exports = {
    context: __dirname + '\\app',
    entry: {
        app: './entry.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader'},
            {test: /\.jsx$/, loader: 'babel-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};