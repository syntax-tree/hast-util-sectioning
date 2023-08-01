import assert from 'node:assert/strict'
import test from 'node:test'
import {sectioning} from './index.js'
import * as mod from './index.js'

test('sectioning', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['sectioning'],
    'should expose the public api'
  )

  // @ts-expect-error: check how a missing `node` is handled.
  assert.equal(sectioning(), false, 'should return `false` without node')

  assert.equal(sectioning(null), false, 'should return `false` with `null`')

  assert.equal(
    sectioning({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  assert.equal(
    sectioning({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  assert.equal(
    sectioning({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha', title: 'Bravo'},
      children: [{type: 'text', value: 'Charlie'}]
    }),
    false,
    'should return `false` when without not sectioning'
  )

  assert.equal(
    sectioning({
      type: 'element',
      tagName: 'article',
      children: [
        {
          type: 'element',
          tagName: 'p',
          children: [{type: 'text', value: 'Delta'}]
        }
      ]
    }),
    true,
    'should return `true` when with sectioning'
  )
})
