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
              android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              firefox: true, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
              yandex: false // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
            }
          }
        }
      ]);
  }
};
