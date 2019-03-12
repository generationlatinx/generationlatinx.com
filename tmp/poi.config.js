module.exports = {
  entry: [
    'src/registerServiceWorker',
    'src/index'
  ],
  plugins: [
    {
      resolve: '@poi/plugin-pwa'
    }
  ]
}