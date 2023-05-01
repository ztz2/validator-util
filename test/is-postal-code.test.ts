import isPostalCode from '../src/lib/is-postal-code';

describe('中国邮政编码校验测试', () => {
  test('734500', async () => {
    expect(isPostalCode('734500')).toBeTruthy();
  });
  test('100101', async () => {
    expect(isPostalCode('100101')).toBeTruthy();
  });
});
