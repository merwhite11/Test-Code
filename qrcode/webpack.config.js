const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  externals: {
    fs: 'commonjs fs' //exclude fs from the bundle
  }
};