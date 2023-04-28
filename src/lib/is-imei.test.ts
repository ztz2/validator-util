import isIMEI from './is-imei';

describe('手机机身码(IMEI)校验测试', () => {
  test('简单字符测试', async () => {
    expect(isIMEI('123456789012345')).toBeTruthy();
    expect(isIMEI('1234567890123456')).toBeTruthy();
    expect(isIMEI('12345678901234567')).toBeTruthy();
  });
});
