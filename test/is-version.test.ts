import isVersion from '../src/lib/is-version';

describe('版本号校验(X.Y.Z格式)测试', () => {
  test('16.3.10', async () => {
    expect(isVersion('16.3.10')).toBeTruthy();
  });
  test('0.0.1', async () => {
    expect(isVersion('0.0.1')).toBeTruthy();
  });
});
