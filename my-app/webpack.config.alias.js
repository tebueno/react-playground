const path = require('path')

module.exports = {
  alias: {
    utilities: path.resolve(__dirname, 'src/utilities'),
    config: path.resolve(__dirname, '.stories/config'),
    stories: path.resolve(__dirname, '.stories'),
    playgrounds: path.resolve(__dirname, '.stories/playgrounds'),
    components: path.resolve(__dirname, 'src/components'),
    themeConstants: path.resolve(__dirname, 'src/theme-constants.js'),
    basicComponents: path.resolve(__dirname, 'src/components/basic'),
    complexComponents: path.resolve(__dirname, 'src/components/complex'),
    visComponents: path.resolve(__dirname, 'src/components/visualization'),
    documentationContainer: path.resolve(__dirname, '.storybook/documentationContainer/'),
    styles: path.resolve(__dirname, 'src/styles'),
  },
}
