const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = ({ config }) => {
  config.devtool = 'inline-source-map';

  const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
  const svgPath = path.resolve('../src/app/assets/');
  fileLoaderRule.exclude = svgPath;
  config.module.rules.push({
    test: /\.svg$/,
    include: svgPath,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
      },
    }],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    enforce: 'pre'
  });

  config.module.rules.push(
    {
      test: /\.module\.s(a|c)ss$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
            camelCase: true,
            sourceMap: isDevelopment
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ]
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: isDevelopment
          }
        }
      ]
    }
  )

  config.resolve.extensions.push('.ts', '.tsx', '.scss', '.css', '.svg');

  config.resolve.alias = {
    ui: path.resolve(__dirname, '../src/app/components/ui/'),
    assets: path.resolve(__dirname, '../src/app/assets/'),
    pages: path.resolve(__dirname, '../src/app/pages')
  };
  return config;
};
