module.exports = {
  entry: [
    'src/registerServiceWorker',
    'src/index'
  ],
  plugins: [
    {
      resolve: '@poi/plugin-eslint'
    },
    {
      resolve: '@poi/plugin-karma'
    },
    {
      resolve: '@poi/plugin-pwa'
    }
  ]
}