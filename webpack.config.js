var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: '/src',
    entry: {
        root: '/src/assets/js/root',
    },
    output: {
        path: path.resolve('/src/assets/bundles'),
        filename: '[name].js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    devServer: {
        proxy: {
            '/api/*': {
                target: 'http://localhost:8000/',
                //secure: false,
                //changeOrigin: false,
            }
        },
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties'],
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ['/src/node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        modulesDirectories: ['/src/node_modules']
    }
}
