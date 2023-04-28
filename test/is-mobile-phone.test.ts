import isMobilePhone from '../src/lib/is-mobile-phone';

describe('手机号码校验测试-严谨', () => {
  test('008618311006933', async () => {
    expect(isMobilePhone('008618311006933')).toBeTruthy();
  });
  test('+8617888829981', async () => {
    expect(isMobilePhone('+8617888829981')).toBeTruthy();
  });
  test('19119255642', async () => {
    expect(isMobilePhone('19119255642')).toBeTruthy();
  });
  test('19519255642', async () => {
    expect(isMobilePhone('19519255642')).toBeTruthy();
  });
});
describe('手机号码校验测试-宽松', () => {
  test('008618311006933', async () => {
    expect(isMobilePhone('008618311006933', { exact: false })).toBeTruthy();
  });
  test('+8617888829981', async () => {
    expect(isMobilePhone('+8617888829981', { exact: false })).toBeTruthy();
  });
  test('19119255642', async () => {
    expect(isMobilePhone('19119255642', { exact: false })).toBeTruthy();
  });
  test('19519255642', async () => {
    expect(isMobilePhone('19519255642', { exact: false })).toBeTruthy();
  });
});
