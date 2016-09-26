'use strict';

/**
 * simple template tag replacement
 *
 * @param {string|Buffer} template
 *
 * @param {Array} tags
 * @param {RegExp} tags.exp
 * @param {string} tags.value
 *
 * @returns {string}
 */
function replaceTemplateTags( template, tags ) {
  return tags.reduce(
    function ( accumulator, tag ) {
      return accumulator.replace( tag.exp, tag.value );
    },
    template.toString()
  );
}

module.exports = replaceTemplateTags;
