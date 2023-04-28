import isUSCI from '../src/lib/is-usci';

describe('法人和其他组织统一社会信用代码校验测试', () => {
  test('严谨校验：91350100M000100Y43', async () => {
    expect(isUSCI('91350100M000100Y43', { exact: true })).toBeTruthy();
  });
  test('严谨校验：91350100M0001TGQXM -> 早期试点代码，正常数据，不合法新国标，校验位是 1 和 M 不符', async () => {
    expect(isUSCI('91350100M0001TGQXM', { exact: true })).toBeFalsy();
  });
  test('严谨校验：91350211M0000XUF46 -> 早期试点代码，正常数据，不合法新国标，，校验位是 R 和 6 不符', async () => {
    expect(isUSCI('91350211M0000XUF46', { exact: true })).toBeFalsy();
  });
  test('严谨校验：91350203M0001FUE2P -> 早期试点代码，正常数据，不合法新国标，，校验位是 J 和 P 不符', async () => {
    expect(isUSCI('91350203M0001FUE2P', { exact: true })).toBeFalsy();
  });

  test('严谨校验：91350100M000100Y43', async () => {
    expect(isUSCI('91350100M000100Y43')).toBeTruthy();
  });
  test('严谨校验：91350100M0001TGQXM', async () => {
    expect(isUSCI('91350100M0001TGQXM')).toBeTruthy();
  });
  test('严谨校验：91350211M0000XUF46', async () => {
    expect(isUSCI('91350211M0000XUF46')).toBeTruthy();
  });
  test('严谨校验：91350203M0001FUE2P', async () => {
    expect(isUSCI('91350203M0001FUE2P')).toBeTruthy();
  });
});
