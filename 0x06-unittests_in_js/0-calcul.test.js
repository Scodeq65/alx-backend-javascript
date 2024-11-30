const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numebers (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

    it('should rounded numebers correctly and return the sum (1, 3.7)', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should round both numbers up and return the sum (1.5, 3.7)', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should round both numbers down and return the sum (1.4, 3.7)', () => {
      assert.strictEqual(calculateNumber(1.2, 3.2), 4);
    });

    it('should handle negative numbers correctly (-1.2, -3.7)', () => {
      assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
    });
});