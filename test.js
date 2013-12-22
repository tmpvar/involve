var involve = require('./involve')
var assert = require('assert');

var basic = involve(__dirname + '/test/basic.package.json');

assert.equal(basic.a, 'a');

