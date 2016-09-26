/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var replaceTemplateTags = require( '../src' );
var test = require( 'tap' ).test;

test( 'replaceTemplateTags( template, tags )', function ( t ) {
  var expected =
    'simple template tag replacement for your awesome project; create something awesome!';
  var template = fs.readFileSync( './test/fixtures/template.txt' );
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
