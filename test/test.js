var assert = require('assert');
var index = require('../src/index');

describe('callbackHell', function() {
    it('should return the result of chained method calls', function(done) {
        index.callbackHell(function (result) {
            assert.equal(result, 'methodA -> methodB -> methodC');
            done();
        })
    });
});
