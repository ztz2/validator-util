import isTelPhone from '../src/lib/is-tel-phone';

describe('座机号码校验测试', () => {
  test('0936-4211235', async () => {
    expect(isTelPhone('0936-4211235')).toBeTruthy();
  });
  test('89076543', async () => {
    expect(isTelPhone('89076543')).toBeTruthy();
  });
  test('010-12345678-1234', async () => {
    expect(isTelPhone('010-12345678-1234')).toBeTruthy();
  });
});
