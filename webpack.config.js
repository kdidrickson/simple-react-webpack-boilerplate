var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './scripts/index.js',
    './scss/main.scss'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  devtool: 'source-map',
  resolve: {
    modules: ['scripts', 'node_modules']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: [
            ['env', {modules: false, targets: {browsers: ['last 2 versions']}}],
            'react'
          ],
          cacheDirectory: true,
          plugins: ['transform-strict-mode', 'transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
              loader: 'style-loader'
          }, {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                url: false
              }
          }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                outputStyle: 'compressed'
              }
          }
        ]
      }
    ]
  }
};
