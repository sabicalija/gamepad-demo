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
  }
};
