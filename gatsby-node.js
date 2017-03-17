var cssnext = require("postcss-cssnext");
var CompressionPlugin = require("compression-webpack-plugin");

exports.modifyWebpackConfig = function (config, env) {
  config.merge({
    postcss: [
      cssnext({
        browsers: ['>1%', 'last 2 versions'],
      }),
    ],
    resolve: {
      "alias": {
        "react": "preact-compat",
        "react-dom": "preact-compat",
      }
    },
    plugins: [
      new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html|jpg|css)$/,
            threshold: 10240,
            minRatio: 0.8
        })
    ]
  });

  return config;
};
