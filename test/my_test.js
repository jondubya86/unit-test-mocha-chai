var expect = require('chai').expect;

// describe('my test suite', function () {
//   it('fails majestically', function () {
//     expect(3).to.eql(2);
//   });
// });

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});