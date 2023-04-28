import isDomainName from '../src/lib/is-domain-name';

describe('域名校验测试', () => {
  test('www.baidu.com', async () => {
    expect(isDomainName('www.baidu.com')).toBeTruthy();
  });
  test('baidu.com', async () => {
    expect(isDomainName('baidu.com')).toBeTruthy();
  });
  test('baidu.com.cn', async () => {
    expect(isDomainName('baidu.com.cn')).toBeTruthy();
  });
  test('api.baidu.com', async () => {
    expect(isDomainName('api.baidu.com')).toBeTruthy();
  });
  test('nodejs.org', async () => {
    expect(isDomainName('nodejs.org')).toBeTruthy();
  });
  test('nodejs.cn', async () => {
    expect(isDomainName('nodejs.cn')).toBeTruthy();
  });
  test('http://baidu.com', async () => {
    expect(isDomainName('http://baidu.com')).toBeFalsy();
  });
  test('https://baidu.com', async () => {
    expect(isDomainName('https://baidu.com')).toBeFalsy();
  });
  test('www.百度.com', async () => {
    expect(isDomainName('www.百度.com')).toBeFalsy();
  });
});
