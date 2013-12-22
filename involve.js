
var path = require('path');

module.exports = function(packagejson) {
  var obj = require(packagejson);

  module.paths.push(path.join(path.dirname(packagejson), 'node_modules'));

  var ret = {};
  if (obj.dependencies) {
    Object.keys(obj.dependencies).forEach(function(key) {
      ret[key] = require(key);
    });
  }

  return ret;
}