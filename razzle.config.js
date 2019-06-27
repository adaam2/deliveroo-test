'use strict';

const path = require('path');

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: './tsconfig.json',
          tslint: undefined,
          watch: './src',
          typeCheck: true,
        },
      },
    },
  ],
  modify: config => {
    config.resolve['alias'] = {
      app: path.resolve('./src/app'),
      components: path.resolve('./src/app/components'),
      lib: path.resolve('./src/app/lib'),
      pages: path.resolve('./src/app/pages'),
      utils: path.resolve('./src/utils'),
      config: path.resolve('./src/config'),
      data: path.resolve('./data')
    };

    return config;
  },
};
