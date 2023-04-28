import isEmail from '../src/lib/is-email';

describe('邮箱校验测试', () => {
  test('hello@world.com', async () => {
    expect(isEmail('hello@world.com')).toBeTruthy();
  });
  test('中文邮箱名@gmail.com', async () => {
    expect(isEmail('中文邮箱名@gmail.com')).toBeTruthy();
  });
});
