const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: "sdk.js",
    path: __dirname + "/dist",
    libraryTarget: 'umd',
    library: ['project','sdk'],  // library default exports will be available as global var "sdk"
    umdNamedDefine: true
},
};