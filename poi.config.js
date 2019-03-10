const path = require('path')
const pkg = require('./package')


module.exports = {
  entry: [
    // 'src/polyfills.js',
    // 'src/index.js'
    'src/index'
  ],
  plugins: [
    {
      resolve: '@poi/plugin-vue-static'
      // options: {
      //   staticRoutes: [
      //     '/'
      //     // '/performers/nelson-rosa-glx-recFJaAN9iiWzzJXQ'
      //   ],
      //   // resourceHints: true
      // }
    },
    // require('poi-preset-bundle-report')(),
    // require('poi-preset-offline')({
    //   pwa: './src/pwa.js', // Path to pwa runtime entry
    //   pluginOptions: {
    //     AppCache: false
    //   } // Additional options for offline-plugin
    // }),
    // {
    //   resolve: 'poi/babel',
    //   options: {
    //     jsx: 'vue'
    //   }
    // }



  ],
  output: {
    html: {
      title: pkg.productName,
      description: pkg.description,
      template: path.join(__dirname, 'index.ejs')
    }
  },
  // presets: [
  // ],
  envs: {
    __VERSION__: '0.0.0',
    POI_APP_READONLY_KEY: process.env.POI_APP_READONLY_KEY,
    POI_APP_WORKSPACE_BIOS: process.env.POI_APP_WORKSPACE_BIOS,
    POI_APP_WORKSPACE_GIGS: process.env.POI_APP_WORKSPACE_GIGS
  }
}
