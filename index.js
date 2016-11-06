'use strict';

/* Dependencies. */
var is = require('hast-util-is-element');

/* Expose. */
module.exports = sectioning;

/* Tag-names. */
var names = [
  'article',
  'aside',
  'nav',
  'section'
];

/* Check if a node is a sectioning element */
function sectioning(node) {
  return is(node, names);
}
