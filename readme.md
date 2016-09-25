# replace-template-tags
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url]

simple template tag replacement

## table of contents
* [installation](#installation)
* [use](#use)
* [license](#license)

## installation
```javascript
npm install dan/replace-template-tags
```

## use
```javascript
var replaceTemplateTags = require( 'replace-template-tags' );
var template = 'simple {function} for your {project} project; so create something {project}!';
var tags = [
  {
    exp: /\{function}/g,
    value: 'template tag replacement'
  },
  {
    exp: /\{project}/g,
    value: 'awesome'
  }
];

result = replaceTemplateTags( template, tags );
// => simple template tag replacement for your awesome project; so create something awesome!
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/replace-template-tags/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/replace-template-tags?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/replace-template-tags.svg
[david-dm-url]: https://david-dm.org/dan-nl/replace-template-tags
[david-dm-dev-image]: https://david-dm.org/dan-nl/replace-template-tags/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/replace-template-tags?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/replace-template-tags/master/license.txt
[travis-image]: https://travis-ci.org/dan-nl/replace-template-tags.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/replace-template-tags
