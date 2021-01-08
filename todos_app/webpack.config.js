const path = require("path");

module.exports = {
    entry: "./frontend/todo_redux.jsx",
    output: {
        // path: "/",
        filename: "./app/assests/javascripts/bundle.js"
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}