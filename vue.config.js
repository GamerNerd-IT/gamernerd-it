const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    sitemap: {
      urls: ["https://gamernerd.it/", "https://gamernerd.it/robots.txt"],
    },
  },
  chainWebpack: (config) => {
    config.performance.maxEntrypointSize(400000).maxAssetSize(400000);
  },
});
