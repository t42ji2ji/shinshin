module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true
  },
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/styles/_variables.scss";`
        }
      }
    }
  };