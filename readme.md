# hast-util-sectioning [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Check if a [node][] is a [**sectioning**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-sectioning
```

## Usage

```javascript
var sectioning = require('hast-util-sectioning')

sectioning({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}) // => false

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
}) // => true
```

## API

### `sectioning(node)`

Check if the given value is a [**sectioning**][spec] [element][].

## Contribute

See [`contribute.md` in `syntax-tree/hast`][contribute] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-sectioning.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-sectioning

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-sectioning.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-sectioning

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-sectioning.svg

[downloads]: https://www.npmjs.com/package/hast-util-sectioning

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[node]: https://github.com/syntax-tree/unist#node

[element]: https://github.com/syntax-tree/unist#element

[spec]: https://html.spec.whatwg.org/#sectioning-content

[contribute]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
