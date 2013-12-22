var path = require('path');

module.exports = function(packagejson) {
  var obj = require(packagejson);
  var base = path.dirname(packagejson);
  module.paths.push(base);
  module.paths.push(path.join(base, 'node_modules'));

  if (obj.dependencies) {
    Object.keys(obj.dependencies).forEach(function(key) {
      var version = obj.dependencies[key];
      var dir = key;

      if (version.match(/\//)) {
        dir = path.join(base, version);
        console.log(dir);
      }

      obj.dependencies[key] = require(dir);
    });
  }
console.log(obj);
  return obj;
}