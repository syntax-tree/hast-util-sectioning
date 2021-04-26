import {convertElement} from 'hast-util-is-element'

export const sectioning = convertElement(['article', 'aside', 'nav', 'section'])
