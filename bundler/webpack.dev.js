const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const infoColor = (message) => `\u001b[1m\u001b[34m${message}\u001b[39m\u001b[22m`;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // host: 'local-ip',
    port: 3000,
    open: true,
    allowedHosts: 'all',
    hot: false,
    watchFiles: ['src/**'],
    static: {
      watch: true,
      directory: path.join(__dirname, '../src/public'),
    },
    client: {
      logging: 'info',
      overlay: true,
      progress: false,
    },
    onListening(devServer) {
      if (!devServer) throw new Error('webpack-dev-server is not defined');
      const { port } = devServer.server.address();
      const domain = `http://localhost:${port}`;
      const logging = `Project running at ${infoColor(domain)}`;
      console.log(logging);
    },
  },
});
