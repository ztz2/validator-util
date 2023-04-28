import isZhCN from '../src/lib/is-zh-ch';

describe('中文/汉字校验测试', () => {
  test('中文汉字', async () => {
    expect(isZhCN('中文汉字')).toBeTruthy();
  });
  test('hello world', async () => {
    expect(isZhCN('hello world')).toBeFalsy();
  });
  test('中&*(#', async () => {
    expect(isZhCN('hello world')).toBeFalsy();
  });
});
