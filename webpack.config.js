"use strict";

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'var',
        library: "glassdb",
        filename: 'glassdb.min.js'
    },
    resolve: {
        extensions: ['.scss', '.ts', '.js', '.json']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /(node_modules)/, loader: 'babel-loader' },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'eval-source-map'
};
