module.exports = {
  pwa: {
    name: "Nemezida Portal",
    themeColor: "",
    msTileColor: "",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      background_color: "",
      description: "Корпоративный портал",
      display: "fullscreen",
      name: "Nemezida Portal",
      short_name: "Portal",
      start_url: ".",
    },
  },
  publicPath: "/",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000/api.php",
        changeOrigin: true,
      },
    },
  },
};