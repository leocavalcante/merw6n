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
            {test: /\.js$/, exclude: /node_modules/, loader: "6to5-loader"},
            {test: /\.jsx$/, loader: '6to5-loader'},
            {test: /\.jsx$/, loader: 'jsx-loader'}
        ]
    }
};