var BN = require('../big-number');
var assert = require('assert');

describe('Big number', function () {
    describe('sum', function () {
        it('101+99=200', function () {
            assert.equal(BN.sum(101, 99), 200);
        });

        it('46576+53254+89=99919', function () {
            assert.equal(BN.sum(46576, 53254, 89), 99919);
        });
        it('17853264985629+345268362985=18198533348614', function () {
            assert.equal(BN.sum('17853264985629', '345268362985'), '18198533348614');
        });
    });
});