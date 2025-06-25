const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  ...defaultConfig,
    externals: { 
    '@wordpress/blocks': 'wp.blocks',
    '@wordpress/block-editor': 'wp.blockEditor' 
  },
  entry: {
    index: './src/index.js',    // front-end
    editor: './src/gutenberg-editor.js',  // editor
    admin: './src/admin.js',  // admin
    'block-recent-posts': './template-parts/blocks/recent-posts/index.js',
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

