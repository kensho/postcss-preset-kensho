const postcss = require('postcss')
const autoprefixerPlugin = require('autoprefixer')
const calcPlugin = require('postcss-calc')
const customPropertiesPlugin = require('postcss-custom-properties')
const flexbugsFixesPlugin = require('postcss-flexbugs-fixes')
const importPlugin = require('postcss-import')
const nestedPlugin = require('postcss-nested')

const pkg = require('./package.json')

module.exports = postcss.plugin(pkg.name, (options = {}) => {
  const {imports = true, variables = {}} = options
  const plugins = [
    imports && importPlugin(),
    variables &&
      customPropertiesPlugin({
        noValueNotifications: 'error',
        preserve: false,
        variables,
        warnings: true,
      }),
    calcPlugin(),
    nestedPlugin(),
    flexbugsFixesPlugin(),
    autoprefixerPlugin(),
  ].filter(Boolean)
  return postcss(plugins)
})
