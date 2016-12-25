var assert = require('assert');
var index = require('../src/index');

describe('callbackHell', function() {
    it('should return the result of chained method calls', function(done) {
        index.callbackHell('start', function (result) {
            assert.equal(result, 'start -> methodA -> methodB -> methodC');
            done();
        })
    });
});

describe('promise', function() {
    it('should return the result of chained method calls', function() {
        return index.promisifiedCallbackHell('start').then(function (result) {
            assert.equal(result, 'start -> methodA -> methodB -> methodC');
        })
    });
});
