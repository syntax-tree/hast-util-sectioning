import assert from 'node:assert/strict'
import test from 'node:test'
import {sectioning} from 'hast-util-sectioning'

test('sectioning', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('hast-util-sectioning')).sort(), [
      'sectioning'
    ])
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error: check how a missing `node` is handled.
    assert.equal(sectioning(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(sectioning(null), false)
  })

  await t.test(
    'should return `false` when without `element`',
    async function () {
      assert.equal(sectioning({type: 'text'}), false)
    }
  )

  await t.test(
    'should return `false` when with invalid `element`',
    async function () {
      assert.equal(sectioning({type: 'element'}), false)
    }
  )

  await t.test(
    'should return `false` when without not sectioning',
    async function () {
      assert.equal(
        sectioning({
          type: 'element',
          tagName: 'a',
          properties: {href: '#alpha', title: 'Bravo'},
          children: [{type: 'text', value: 'Charlie'}]
        }),
        false
      )
    }
  )

  await t.test('should return `true` when with sectioning', async function () {
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
      true
    )
  })
})
