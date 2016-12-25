var assert = require('assert');
var hell = require('../src/hell');
var promisified = require('../src/promisified');

describe('callbackHell', function() {
    it('should return the result of chained method calls', function(done) {
        hell.abc('start', function (result) {
            assert.equal(result, 'start -> methodA -> methodB -> methodC');
            done();
        })
    });
});

describe('promise', function() {
    it('should return the result of chained method calls', function () { // Argument 'done' is not required.
        return promisified.abc('start').then(function (result) {
            assert.equal(result, 'start -> methodA -> methodB -> methodC');
        })
    });
});
