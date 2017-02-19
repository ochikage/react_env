var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: '/src',
    entry: {
        sample: '/src/assets/js/sample',
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
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.jpg$/, loader: 'url-loader?mimetype=image/jpeg' },
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
