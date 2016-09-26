# replace-template-tags
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

simple template tag replacement; allows you to specify a regex and value to use for each replacement

## table of contents
* [installation](#installation)
* [use](#use)
    * [replaceTemplateTags( template, tags ](#replacetemplatetags-template-tags-)
    * [basic](#basic)
* [license](#license)

## installation
```javascript
npm install replace-template-tags
```

## use
### replaceTemplateTags( template, tags )
```javascript
@param {string|Buffer} template

@param {Array} tags
@param {RegExp} tags.exp
@param {string} tags.value

@returns {string}
```

### basic
```javascript
var replaceTemplateTags = require( 'replace-template-tags' );
var template = 'simple {function} for your {project} project; create something {project}!';
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
// => simple template tag replacement for your awesome project; create something awesome!
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
[npm-image]: https://img.shields.io/npm/v/replace-template-tags.svg
[npm-url]: https://www.npmjs.com/package/replace-template-tags
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/02ccf522-5faf-4ee6-a1ca-5a572e3b8230/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/02ccf522-5faf-4ee6-a1ca-5a572e3b8230
[travis-image]: https://travis-ci.org/dan-nl/replace-template-tags.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/replace-template-tags
