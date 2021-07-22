/**
 * @typedef {import('hast').Element & {tagName: 'article'|'aside'|'nav'|'section'}} Sectioning
 * @typedef {import('hast-util-is-element').AssertPredicate<Sectioning>} AssertSectioning
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a sectioning element.
 * @type {AssertSectioning}
 */
// @ts-expect-error Sure, the assertion matches.
export const sectioning = convertElement(['article', 'aside', 'nav', 'section'])
