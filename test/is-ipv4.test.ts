import isIpv4 from '../src/lib/is-ipv4';

describe('ip-v4[:端口]校验测试', () => {
  test('172.16.0.0', async () => {
    expect(isIpv4('172.16.0.0')).toBeTruthy();
  });
  test('172.16.0.0:8080', async () => {
    expect(isIpv4('172.16.0.0:8080')).toBeTruthy();
  });
  test('127.0.0.0', async () => {
    expect(isIpv4('127.0.0.0')).toBeTruthy();
  });
  test('127.0.0.0:998', async () => {
    expect(isIpv4('127.0.0.0:998')).toBeTruthy();
  });
});
