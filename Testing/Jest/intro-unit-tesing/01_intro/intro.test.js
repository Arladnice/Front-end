const {sum, nativeNull} = require('./intro')
describe('function Sum', () => {
  test('Sum shoud return sum of two values', () => {
    expect(sum(1, 3)).toBe(4)
  })

  test('Sum shoud return value correctly comparing to other', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeLessThan(6);
  })

  test('Sum shoud sum 2 float values correctly', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  })

});

describe('nativeNull', () => {
  test('shoud return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

