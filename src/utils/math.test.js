const { addNumbers } = require('./math');

describe('math.js', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(addNumbers(1, 2)).toBe(3);
  });
});
