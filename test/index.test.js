'use strict';

/**
 * module dependencies
 */
var replaceTemplateTags = require( '../src' );
var test = require( 'tap' ).test;

test( 'replaceTemplateTags( template, tags )', function ( t ) {
  var expected = 'simple template tag replacement for your awesome project; ' +
    'so create something awesome!';
  var template = 'simple {function} for your {project} project; ' +
    'so create something {project}!';
  var result;
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

  t.equal(
    result,
    expected,
    'should return an expected result with global template tag replacement'
  );

  t.end();
} );
