const assert = require('assert');
const { hello } = require('./index.js');

describe('Hello function tests', function() {
  it('should return "Hello, CI/CD!"', function() {
    assert.strictEqual(hello(), "Hello, CI/CD!");
  });
  
  it('should be a function', function() {
    assert.strictEqual(typeof hello, 'function');
  });
});
