import isImageLink from '../src/lib/is-image-link';

describe('图片链接地址校验测试', () => {
  test('https://www.abc.com/logo.jpeg', async () => {
    expect(isImageLink('https://www.abc.com/logo.jpeg')).toBeTruthy();
  });
  test('http://www.abc.com/logo.png', async () => {
    expect(isImageLink('http://www.abc.com/logo.png')).toBeTruthy();
  });
});
