const path = require('path');

module.exports = function override(config) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@services': path.resolve(__dirname, 'src/services'),
  };
  return config;
};