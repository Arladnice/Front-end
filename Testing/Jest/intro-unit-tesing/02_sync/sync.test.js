const Lodash = require('./sync')
describe('Lodash: compact', () => {

  const _ = new Lodash()

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test('should remove falsy values from massive', () => {
    const array = [42, false, 0, '', true, null, 'hello'];
    const result = [42, true, 'hello']
    expect(_.compact(array)).toEqual(result)
  });

  test('should NOT contain falsy values', () => {
    const array = [42, false, 0, '', true, null, 'hello'];
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(null);
  });
});
