var cssnext = require("postcss-cssnext");

exports.modifyWebpackConfig = function (config, env) {
  config.merge({
    postcss: [
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
  });

  return config;
};
