const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  ...defaultConfig,
  entry: {
    index: './src/index.js',    // front-end
    editor: './src/gutenberg-editor.js',  // editor
  },
    plugins: [
    ...defaultConfig.plugins,
    new BrowserSyncPlugin({
      proxy: 'http://localhost:8000',
      files: [
        '**/*.php',
        'build/*.css',
        'build/*.js',
      ],
      open: false,
      notify: false,
    }),
  ],
};

