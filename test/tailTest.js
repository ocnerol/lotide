const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('should return [] for [3]', () => {
    assert.deepEqual(tail([3]), []);
  });

  it("should return ['4', '6', '8'] for ['2', '4', '6', '8']", () => {
    assert.deepEqual(tail(['2', '4', '6', '8']), ['4', '6', '8']);
  });
});
