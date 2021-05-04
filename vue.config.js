// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'Eagleglobal Markets',
    themeColor: '#0476F2',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconsPath: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
      maskIcon: 'img/icons/android-chrome-192x192.png',
      msTileImage: 'img/icons/android-chrome-512x512.png'
    },
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    // workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'dev/sw.js',
      // ...other Workbox options...
    // }
  }
}