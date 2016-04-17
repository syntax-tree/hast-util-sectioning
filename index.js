/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:sectioning
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var is = require('hast-util-is-element');

/*
 * Tag-names.
 */

var names = [
    'article',
    'aside',
    'nav',
    'section'
];

/**
 * Check if a node is a sectioning element
 *
 * @param {*} node - Thing to check.
 * @return {boolean} - Whether a node is sectioning.
 */
function sectioning(node) {
    return is(node, names);
}

/*
 * Expose.
 */

module.exports = sectioning;
