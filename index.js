'use strict'

var is = require('hast-util-is-element')

module.exports = sectioning

var names = ['article', 'aside', 'nav', 'section']

/* Check if a node is a sectioning element */
function sectioning(node) {
  return is(node, names)
}
