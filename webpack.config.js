const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'index.ts', 
    library: 'PersistPro', 
    libraryTarget: 'umd', 
    globalObject: 'this', 
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
      // ... outros loaders, se necessário ...
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Adicionar '.ts' e '.tsx' aqui
  },
  // ...outras configurações...
};
