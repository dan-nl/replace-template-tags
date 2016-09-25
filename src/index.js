'use strict';

/**
 * replaces each template tag in the content provided
 *
 * @param {string} content
 *
 * @param {Array} tags
 * @param {RegExp} tags.exp
 * @param {string} tags.value
 *
 * @returns {string}
 */
function replaceTemplateTags( content, tags ) {
  return tags.reduce(
    function ( accumulator, tag ) {
      return accumulator.replace( tag.exp, tag.value );
    },
    content
  );
}

module.exports = replaceTemplateTags;
