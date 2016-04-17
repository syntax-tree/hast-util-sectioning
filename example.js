// Dependencies:
var sectioning = require('./index.js');

// Given a non-sectioning value:
var result = sectioning({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#alpha',
        'title': 'Bravo'
    },
    'children': [{
        'type': 'text',
        'value': 'Charlie'
    }]
});

// Yields:
console.log('js', String(result));

// Given a sectioning element:
result = sectioning({
    'type': 'element',
    'tagName': 'article',
    'children': [{
        'type': 'element',
        'tagName': 'p',
        'children': [{
            'type': 'text',
            'value': 'Delta'
        }]
    }]
});

// Yields:
console.log('js', String(result));
