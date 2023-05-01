import isBase64 from '../src/lib/is-base64';

describe('base64格式校验测试', () => {
  test('data:image/gif;base64,xxxx==', async () => {
    expect(isBase64('data:image/gif;base64,xxxx==')).toBeTruthy();
  });
});
