const assert = require('chai').assert;
const middle = require('../middle')

describe('#middle', () => {

  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('should return [] for [2]', () => {
    assert.deepEqual(middle([2]), []);
  });

  it('should return [] for [7, 9]', () => {
    assert.deepEqual(middle([7, 9]), []);
  });

  it('should return [1] for [0, 1, 5]', () => {
    assert.deepEqual(middle([0, 1, 5]), [1]);
  });

  it('should return [45, 12] for [2, 45, 12, 33]', () => {
    assert.deepEqual(middle([2, 45, 12, 33]), [45, 12]);
  });

});
