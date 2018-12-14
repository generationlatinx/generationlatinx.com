const path = require('path')
const pkg = require('./package')

module.exports = {
  entry: [
    'src/polyfills.js',
    'src/index.js'
  ],
  html: {
    title: pkg.productName,
    description: pkg.description,
    template: path.join(__dirname, 'index.ejs')
  },
  postcss: {
    plugins: [
      // Your postcss plugins
    ]
  },
  presets: [
    require('poi-preset-bundle-report')(),
    require('poi-preset-offline')({
      pwa: './src/pwa.js', // Path to pwa runtime entry
      pluginOptions: {} // Additional options for offline-plugin
    }),
    "@vue/app"
  ],
  // plugins: ['babel-plugin-istanbul', 'istanbul-instrumenter-loader'],

  envs: {
    __VERSION__: '0.0.0',
    POI_APP_READONLY_KEY: process.env.POI_APP_READONLY_KEY,
    POI_APP_WORKSPACE_BIOS: process.env.POI_APP_WORKSPACE_BIOS,
    POI_APP_WORKSPACE_GIGS: process.env.POI_APP_WORKSPACE_GIGS
  },
  // devtool: 'eval'
}
