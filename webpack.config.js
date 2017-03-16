module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: 'public/js',
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: "source-map",
  devtool: 'cheap-module-eval-source-map'
};
