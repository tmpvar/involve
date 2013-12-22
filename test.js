var involve = require('./involve')
var assert = require('assert');

var basic = involve(__dirname + '/test/basic.package.json');
assert.equal(basic.dependencies.a, 'a');
assert.equal(basic.dependencies.b, 'b');
assert.equal(basic.dependencies.c, 'c');



