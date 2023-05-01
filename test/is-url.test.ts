import isURL from '../src/lib/is-url';

describe('网址校验测试', () => {
  test('www.qq.com', async () => {
    expect(isURL('www.qq.com')).toBeTruthy();
  });
  test('https://vuejs.org/v2/api/#v-model', async () => {
    expect(isURL('https://vuejs.org/v2/api/#v-model')).toBeTruthy();
  });
  test('www.qq.99', async () => {
    expect(isURL('www.qq.99')).toBeTruthy();
  });
  test('//www.qq.com', async () => {
    expect(isURL('//www.qq.com')).toBeTruthy();
  });
  test('www.腾讯.cs', async () => {
    expect(isURL('www.腾讯.cs')).toBeTruthy();
  });
  test('ftp://baidu.qq', async () => {
    expect(isURL('ftp://baidu.qq')).toBeTruthy();
  });
  test('http://baidu.com', async () => {
    expect(isURL('http://baidu.com')).toBeTruthy();
  });
  test('https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15', async () => {
    expect(isURL('https://www.amap.com/search?id=BV10060895&city=420111&geoobj=113.207951%7C29.992557%7C115.785782%7C31.204369&query_type=IDQ&query=%E5%85%89%E8%B0%B7%E5%B9%BF%E5%9C%BA(%E5%9C%B0%E9%93%81%E7%AB%99)&zoom=10.15')).toBeTruthy();
  });
  test('360.com:8080/vue/#/a=1&b=2', async () => {
    expect(isURL('360.com:8080/vue/#/a=1&b=2')).toBeTruthy();
  });
});
