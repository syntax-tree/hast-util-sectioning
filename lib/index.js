import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is sectioning content.
 *
 * @param value
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether `value` is an element considered sectioning content.
 *
 *   The elements `article`, `aside`, `nav`, and `section` are sectioning.
 */
export const sectioning = convertElement(
  /**
   * @param element
   * @returns {element is {tagName: 'article' | 'aside' | 'nav' | 'section'}}
   */
  function (element) {
    return (
      element.tagName === 'article' ||
      element.tagName === 'aside' ||
      element.tagName === 'nav' ||
      element.tagName === 'section'
    )
  }
)
