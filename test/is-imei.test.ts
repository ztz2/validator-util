import isIMEI from '../src/lib/is-imei';

describe('手机机身码(IMEI)校验测试', () => {
  test('123456789012345', async () => {
    expect(isIMEI('123456789012345')).toBeTruthy();
  });
  test('1234567890123456', async () => {
    expect(isIMEI('1234567890123456')).toBeTruthy();
  });
  test('12345678901234567', async () => {
    expect(isIMEI('12345678901234567')).toBeTruthy();
  });
});
