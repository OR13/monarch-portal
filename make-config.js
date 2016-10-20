var createConfig = require('hjs-webpack')

module.exports = function makeConfig(isDev) {
  var config = createConfig({
    isDev: isDev,
    in: './app/scripts/app.js',
    out: './dist',
    output: {
      publicPath: ''
    },
    html: function(ctx) {
      return ctx.defaultTemplate({
        publicPath: ''
      })
    },
    clearBeforeBuild: '!(locale|img|favicon.ico|CNAME)'
  })

  // Handle js-ipfs-api
  config.module.loaders.push({
    test: /\.js$/,
    include: /node_modules\/(hoek|qs|wreck|boom|ipfs-api|ipfs-geoip)/,
    loader: 'babel-loader'
  })

  config.externals = {
    // Needed for js-ipfs-api
    net: '{}',
    fs: '{}',
    tls: '{}',
    console: '{}',
    'require-dir': '{}',
    // Needed for enzyme
    jsdom: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': 'window',
    'text-encoding': 'window'
  }

  config.resolve = {
    modulesDirectories: [
      'node_modules'
    ],
    alias: {
      http: 'stream-http',
      https: 'https-browserify',
      sinon: 'sinon/pkg/sinon'
    }
  }

  config.module.noParse = config.module.noParse || []
  config.module.noParse.push(/node_modules\/sinon\//)

  return config
}
