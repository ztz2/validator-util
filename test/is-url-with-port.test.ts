import isUrlWithPort from '../src/lib/is-url-with-port';

describe('网址校验测试(必须带端口号的网址或IP)', () => {
  test('https://www.qq.com:8080', async () => {
    expect(isUrlWithPort('https://www.qq.com:8080')).toBeTruthy();
  });
  test('127.0.0.1:5050', async () => {
    expect(isUrlWithPort('127.0.0.1:5050')).toBeTruthy();
  });
  test('baidu.com:8001', async () => {
    expect(isUrlWithPort('baidu.com:8001')).toBeTruthy();
  });
  test('http://192.168.1.1:9090', async () => {
    expect(isUrlWithPort('http://192.168.1.1:9090')).toBeTruthy();
  });
  test('反例：192.168.1.1', async () => {
    expect(isUrlWithPort('192.168.1.1')).toBeFalsy();
  });
  test('反例：https://www.jd.com', async () => {
    expect(isUrlWithPort('https://www.jd.com')).toBeFalsy();
  });
});
