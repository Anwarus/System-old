const expect = require('chai').expect;
const should = require('chai').should();

const utils = require('./../lib/utils');

describe('test getRandomId ', function test() {
    it('should return number', function testCase() {
        const result = utils.getRandomId();

        (typeof result).should.equal('number');
    });
});
