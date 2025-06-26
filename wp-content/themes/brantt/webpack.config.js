const path = require('path');
const glob = require('glob');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

// 1. Auto-detect all blocks
const blockEntries = glob
  .sync('./template-parts/blocks/**/index.js')
  .reduce((entries, filePath) => {
    const blockName = path.basename(path.dirname(filePath)); // ✅ safer: gets 'recent-posts'
    entries[`block-${blockName}`] = path.resolve(__dirname, filePath); // ✅ absolute path
    return entries;
  }, {});

// 2. Your global scripts
const globalEntries = {
  index: './src/index.js',
  admin: './src/admin.js',
  editor: './src/gutenberg-editor.js',
};

// 3. Merge everything into final entry
const entry = {
  ...globalEntries,
  ...blockEntries,
};

// 4. Output per file
const output = {
  path: path.resolve(__dirname, 'build'), // default path
  filename: (pathData) => {
    const name = pathData.chunk.name;

    if (name.startsWith('block-')) {
      const blockName = name.replace('block-', '');
      return `../template-parts/blocks/${blockName}/build/index.js`; // per-block build
    }

    return `${name}.js`; // global scripts
  },
  clean: false,
};

module.exports = {
  ...defaultConfig,
  entry,
  output,
  watchOptions: {
    ignored: [
      '**/node_modules',
      '**/template-parts/blocks/**/build/**',
      '**/build/**',
    ],
  },
};
