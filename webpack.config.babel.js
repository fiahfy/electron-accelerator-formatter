export default {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: `${__dirname}/`,
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
