import postcss from 'postcss'
import properties from './properties'
import values from './values'

export default postcss.plugin('postcss-french-stylesheets', () => (css) => {
  css.walkDecls((decl) => {
    /**
     * Convert Properties
     */
    Object.keys(properties).forEach((property) => {
      if (decl.prop === properties[property]) {
        decl.prop = property
      }
    })

    /**
     * Convert Values
     */
    decl.value = decl.value.split(' ')
      .map(x => x.trim())
      .map(val => Object.keys(values).reduce(
        (v, value) => (v === values[value] ? value : v),
      val)).join(' ')
    // Object.keys(values).forEach((value) => {
    //   decl.value = decl.value.replace(`/\b${values[value]}$/`, value)
    // })

    /**
     * Convert "!wichtig"
     */
    if (decl.value.indexOf('!prioritaire') >= 0) {
      decl.value = decl.value.replace(/\s*!prioritaire\s*/, '')
      decl.important = true
    }
  })
})
