# grunt-file-append

> Append or prepend data to file.

## Getting Started
This plugin requires Grunt `>0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-file-append --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-append');
```

## The "file_append" task

### Overview
In your project's Gruntfile, add a section named `file_append` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  file_append: {
    default_options: {
      files: [
        {
          append: "text to append",
          prepend: "text to prepend",
          input: '/path/to/input/file'
          output: 'path/to/output/file'
        }
      ]
    }
  }
})
```

### Options

Array of objects or functions which return structure:

#### append
Type: `String|Function`
Default value: `''`

A string value that is used to append to the end of file.

#### prepend
Type: `String|Function`
Default value: `''`

A string value that is used to append to the begin of file.

#### input
Type: `String|Function`
!Required

A string value that is used to find original file.

#### output
Type: `String|Function`
Default value: `input`

A string value that is used to find output file. If undefined then data get from original file and writes to original file.

### Usage Examples

#### Example 1
In this example, show how to generate output file `tmp/testing1` which contain `"goog.provide(\"goog.renaming\");\n"` and data from `./test/fixtures/testing1` file.

```js
grunt.initConfig({
  file_append: {
    default_options: {
      files: [
        {
          prepend: "goog.provide(\"goog.renaming\");\n",
          input: './test/fixtures/testing1',
          output: 'tmp/testing1'
        }
      ]
    }
  }
})
```

#### Example 2
In this example, show how to generate output file `tmp/testing2` which contain data from `tmp/testing2` file and `"\n/*\n//@ sourceMappingURL=testing2.js.map\n*/"`.

```js
grunt.initConfig({
  file_append: {
    default_options: {
      files: [
        function() {
          return {
            append: "\n/*\n//@ sourceMappingURL=testing2.js.map\n*/"
            input: 'tmp/testing2'
          };
        }
      ]
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
