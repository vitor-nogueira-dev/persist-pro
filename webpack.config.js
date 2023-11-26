const path = require('path');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'PersistPro',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // plugins: [
  //   new webpack.BannerPlugin({
  //     banner: '/* Minificação desativada para getLocalStorage */',
  //     raw: true,
  //     include: /getLocalStorage/,
  //   }),
  // ],
};
