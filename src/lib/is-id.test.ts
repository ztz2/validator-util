import isID from './is-id';

describe('身份证号校验测试', () => {
  test('110101199001013996 -> 正常数据', async () => {
    expect(isID('110101199001013996')).toBeTruthy();
  });
  test('51010419900101401X -> 正常数据', async () => {
    expect(isID('51010419900101401X')).toBeTruthy();
  });
  test('123456991010193 -> 一代身份证', async () => {
    expect(isID('51010419900101401X')).toBeTruthy();
  });
  test('120101199001016532 -> 异常，最后一位数据是1', async () => {
    expect(isID('120101199001016532')).toBeFalsy();
  });
  test('120101199001014525 -> 异常，最后2位数据是9', async () => {
    expect(isID('120101199001014525')).toBeFalsy();
  });
  test('51010419900101927X -> 异常，最后3位数据是9', async () => {
    expect(isID('51010419900101927X')).toBeFalsy();
  });
});
