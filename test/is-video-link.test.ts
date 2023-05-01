import isVideoLink from '../src/lib/is-video-link';

describe('视频链接地址校验测试', () => {
  test('http://www.abc.com/video/wc.avi', async () => {
    expect(isVideoLink('http://www.abc.com/video/wc.avi')).toBeTruthy();
  });
  test('http://www.abc.com/video/997.mp4', async () => {
    expect(isVideoLink('http://www.abc.com/video/997.mp4')).toBeTruthy();
  });
  test('https://www.efg.com/video/996.avi', async () => {
    expect(isVideoLink('https://www.efg.com/video/996.avi')).toBeTruthy();
  });
});
