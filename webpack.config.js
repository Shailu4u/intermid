const path = require('path');

module.exports = {
  entry: {
    vendor: './src/vendor.js',  
    main:  './src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      _: [
        path.resolve(__dirname, 'src/assets/js'),
        path.resolve(__dirname, 'src/assets/vendor'),
      ],
    },
  },
};