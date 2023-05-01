import isIPV6 from '../src/lib/is-ipv6';

describe('ip-v6校验(端口可选项)测试', () => {
  test('2031:0000:130f:0000:0000:09c0:876a:130b', async () => {
    expect(isIPV6('2031:0000:130f:0000:0000:09c0:876a:130b')).toBeTruthy();
  });
  test('[2031:0000:130f:0000:0000:09c0:876a:130b]:8080', async () => {
    expect(isIPV6('[2031:0000:130f:0000:0000:09c0:876a:130b]:8080')).toBeTruthy();
  });
});
