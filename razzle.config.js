'use strict';

const path = require('path');
const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const cssLoaderFinder = makeLoaderFinder('css-loader');
const paths = require('razzle/config/paths');

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
  modify: (baseConfig, {dev}, webpack) => {
    const config = Object.assign({}, baseConfig);

    config.externals = ['tls', 'net', 'fs'];

    const scssLoader = {
        loader: require.resolve('sass-loader'),
        options: {
            sourceMap: dev,
        },
    };

    // Copy base css rules and add scss support
    config.module.rules.filter(cssLoaderFinder).forEach(rule => {
        const isCssModuleRule = !rule.test.test('module.css');
        const scssExclude = [paths.appBuild];
        let scssTest = /\.s[ac]ss$/;
        if (isCssModuleRule) {
            scssTest = /\.module\.s[ac]ss$/;
        } else {
            scssExclude.push(/\.module\.s[ac]ss$/);
        }

        // Use default configs
        config.module.rules.push({
            test: scssTest,
            exclude: scssExclude,
            use: [
                ...rule.use,
                scssLoader,
            ]
        });
    });

    config.resolve['alias'] = {
      app: path.resolve('./src/app'),
      components: path.resolve('./src/app/components'),
      lib: path.resolve('./src/app/lib'),
      pages: path.resolve('./src/app/pages'),
      utils: path.resolve('./src/utils'),
      config: path.resolve('./src/config'),
      data: path.resolve('./data'),
      ui: path.resolve('./src/app/components/ui'),
      assets: path.resolve('./src/app//assets')
    };

    return config;
  },
};
