'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ONLINE: '"dev"',
  ROUTER_MODE: '"hash"',
  WEB_API:'"http://127.0.0.1"'
})
