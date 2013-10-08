/*
 * grunt-file-append
 * http://dj7.dyndns.org
 *
 * Copyright (c) 2013 Efim Vl. Dejin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('file_append', 'Append or prepend data to file.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
//    var options = this.options({
//      punctuation: '.',
//      separator: ', '
//    });

    var data = this.data.files;

    for (var key in data) {
      var filepath = data[key].input ? data[key].input : key;

      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      }
      var value = (data[key].prepend ? data[key].prepend : '') + grunt.file.read(filepath) + (data[key].append ? data[key].append : '');

      grunt.file.write(key, value);

    }

  });

};
