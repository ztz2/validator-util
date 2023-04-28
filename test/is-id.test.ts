import isID from '../src/lib/is-id';

describe('身份证号校验测试', () => {
  test('严谨校验：110101199001013996', async () => {
    expect(isID('110101199001013996', { exact: true })).toBeTruthy();
  });
  test('严谨校验：51010419900101401X', async () => {
    expect(isID('51010419900101401X', { exact: true })).toBeTruthy();
  });
  test('严谨校验：123456991010193 -> 异常，不能计算第一代身份证', async () => {
    expect(isID('123456991010193', { exact: true })).toBeFalsy();
  });
  test('严谨校验：120101199001016532 -> 异常，最后一位数据是1', async () => {
    expect(isID('120101199001016532', { exact: true })).toBeFalsy();
  });
  test('严谨校验：120101199001014525 -> 异常，最后2位数据是9', async () => {
    expect(isID('120101199001014525', { exact: true })).toBeFalsy();
  });
  test('严谨校验：51010419900101927X -> 异常，最后3位数据是9', async () => {
    expect(isID('51010419900101927X', { exact: true })).toBeFalsy();
  });

  test('非严谨校验：110101199001013996', async () => {
    expect(isID('110101199001013996')).toBeTruthy();
  });
  test('非严谨校验：51010419900101401X', async () => {
    expect(isID('51010419900101401X')).toBeTruthy();
  });
  test('非严谨校验：123456991010193', async () => {
    expect(isID('123456991010193')).toBeTruthy();
  });
  test('非严谨校验：120101199001016532', async () => {
    expect(isID('120101199001016532')).toBeTruthy();
  });
  test('非严谨校验：120101199001014525', async () => {
    expect(isID('120101199001014525')).toBeTruthy();
  });
  test('非严谨校验：51010419900101927X', async () => {
    expect(isID('51010419900101927X')).toBeTruthy();
  });
});
