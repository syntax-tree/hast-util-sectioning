/**
 * @typedef {import('hast').Element} Element
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is sectioning content.
 *
 * @type {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'article' | 'aside' | 'nav' | 'section'}>}
 * @param value
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether `value` is an element considered sectioning content.
 *
 *   The elements `article`, `aside`, `nav`, and `section` are sectioning.
 */
// @ts-expect-error Sure, the assertion matches.
export const sectioning = convertElement(['article', 'aside', 'nav', 'section'])
