module.exports = {
  target: 'node',
  entry: './server/server.js',
  output: {
    path: './dist',
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  externals: [/^[a-z]/],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015-node4'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-node4'],
        },
      },
    ],
  },
  devtool: 'source-map',
};
