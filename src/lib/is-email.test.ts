import isEmail from './is-email';

describe('邮箱校验测试', () => {
  test('一般邮箱测试', async () => {
    expect(isEmail('hello@world.com')).toBeTruthy();
  });
  test('中文邮箱测试', async () => {
    expect(isEmail('中文邮箱名@gmail.com')).toBeTruthy();
  });
});
