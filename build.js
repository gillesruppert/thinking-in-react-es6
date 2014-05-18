var browserify = require('browserify');
var es6ify = require('es6ify');
var reactify = require('reactify');
var path = require('path');
var fs = require('fs');
var jsRoot = path.join(__dirname, 'app', 'js');
var bundleRoot = path.join(__dirname, 'app', 'build');
var bundle = path.join(bundleRoot, 'bundle.js');

browserify({
  extensions: ['.jsx']
})
  .transform(reactify)
  .add(es6ify.runtime)
  .transform(es6ify.configure(/.jsx/))
  .require(require.resolve(path.join(jsRoot, 'main.jsx')), { entry: true })
  .bundle({ debug: true })
  .on('error', function (err) { console.error(err); })
  .pipe(fs.createWriteStream(bundle));

console.log('Done');
