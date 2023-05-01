import isMagnetLink from '../src/lib/is-magnet-link';

describe('磁力链接校验测试', () => {
  test('例如: magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC"> 2333 </div>', async () => {
    expect(isMagnetLink('magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC')).toBeTruthy();
  });
});
