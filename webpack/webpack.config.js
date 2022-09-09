const path = require('path')
module.exports = {
    mode: "development",
    entry: "./source/index.js",
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}