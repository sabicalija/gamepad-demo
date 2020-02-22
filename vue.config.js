const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  publicPath: "/gamepad-demo/",
  css: {
    loaderOptions: {
      stylus: {
        import: ["~@/style/fonts.styl", "~@/style/variables.styl", "~@/style/index.styl"]
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(options => {
      options[0].title = "GamePad API Demo";
      return options;
    });
    config
      .plugin("favicon")
      .before("html")
      .use(require("favicons-webpack-plugin"), [
        {
          logo: "@/assets/logo-central.svg",
          cache: true,
          devMode: "webapp",
          prefix: "img/favicon/",
          inject: "force",
          favicons: {
            appName: "GamePad API Demo",
            appDescription: "GamePad API Demo made with Vue.js",
            theme_color: "#4DBA87",
            background: "#ffc40d",
            appleStatusBarStyle: "black-translucent",
            dir: "auto",
            lang: "en-US",
            version: "1.0",
            display: "standalone",
            orientation: "any",
            start_url: "/gamepad-demo/",
            icons: {
              android: true,
              appleIcon: true,
              appleStartup: true,
              coast: false,
              favicons: true,
              firefox: true,
              windows: true,
              yandex: false
            }
          }
        }
      ]);
    config.plugin("workbox").use(WorkboxPlugin.GenerateSW, [
      {
        exclude: [/\.map$/, /img\/favicon\//],
        maximumFileSizeToCacheInBytes: 3500000,
        cacheId: "gamepad-demo",
        importScripts: ["js/skip-waiting.js"],
        clientsClaim: true,
        skipWaiting: false
      }
    ]);
  }
};
