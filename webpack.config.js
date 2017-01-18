const join = require('path').join

const paths = {
  entry: join(__dirname, '/src/index.js'),
  build: join(__dirname, '/build/')
}

// export a configuration object

module.exports = {
  // entry is the path to the main source file
  // (usually the index)
  entry: paths.entry,
  // output takes an object which describes the output bundle
  output: {
    // the path to the directory where the build is going to go
    path: paths.build,
    // the name of the ouput bundle
    filename: 'bundle.js'
  },
  // module is where your loader configuration goes.
  // webpack handles things that aren't necessarily javascript
  // so loaders help webpack handle that
  module: {
    // rules takes an array of objects.
    rules: [
      {
        // test tells webpack which files to run through this loader
        // here we're giving it a regex that will run this loader configuration
        // on all files that have an extenstion of .js or .jsx
        test: /\.jsx?$/,
        // exclude allows you to set a things to leave out of this config
        exclude: './node_modules/',
        // here we designate which loader or loaders to use. The loader property
        // takes a string where the loaders property takes an array. If you want
        // to use the query property you have to use loader
        loader: 'babel-loader',
        // query allows us to pass configuration options to the loader itself
        // it can also be attached to the string set to loader as a query string.
        // Babel itself is just the transpiler so you need to tell it which
        // transpilations to run. They also need to be installed seperately.
        // these two are in the package.json (babel-preset-es2015 and
        // babel-preset-react.) One is for jsx and the other is for es2015
        // syntax like import.
        options: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
