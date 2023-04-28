import isPhone from '../src/lib/is-phone';

describe('手机号码与座机号码测试', () => {
  test('手机号码：008618311006933', async () => {
    expect(isPhone('008618311006933')).toBeTruthy();
  });
  test('手机号码：+8617888829981', async () => {
    expect(isPhone('+8617888829981')).toBeTruthy();
  });
  test('手机号码：19119255642', async () => {
    expect(isPhone('19119255642')).toBeTruthy();
  });
  test('手机号码：19519255642', async () => {
    expect(isPhone('19519255642')).toBeTruthy();
  });

  test('座机号码：0936-4211235', async () => {
    expect(isPhone('0936-4211235')).toBeTruthy();
  });
  test('座机号码：89076543', async () => {
    expect(isPhone('89076543')).toBeTruthy();
  });
  test('座机号码：010-12345678-1234', async () => {
    expect(isPhone('010-12345678-1234')).toBeTruthy();
  });
});
