import isUSCI from './is-usci';

describe('法人和其他组织统一社会信用代码校验测试', () => {
  test('91350100M000100Y43 -> 正常数据', async () => {
    expect(isUSCI('91350100M000100Y43')).toBeTruthy();
  });
  test('91350100M0001TGQXM -> 异常，校验位是 1 和 M 不符', async () => {
    expect(isUSCI('91350100M0001TGQXM')).toBeFalsy();
  });
  test('91350211M0000XUF46 -> 异常，校验位是 R 和 6 不符', async () => {
    expect(isUSCI('91350211M0000XUF46')).toBeFalsy();
  });
  test('91350203M0001FUE2P -> 异常，校验位是 J 和 P 不符', async () => {
    expect(isUSCI('91350203M0001FUE2P')).toBeFalsy();
  });
});
