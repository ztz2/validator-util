import isCurrencyAmount from '../src/lib/is-currency-amount';

describe('数字/货币金额校验测试', () => {
  test('100', async () => {
    expect(isCurrencyAmount('100')).toBeTruthy();
  });
  test('-0.99', async () => {
    expect(isCurrencyAmount('-0.99')).toBeTruthy();
  });
  test('3', async () => {
    expect(isCurrencyAmount('3')).toBeTruthy();
  });
  test('234.32', async () => {
    expect(isCurrencyAmount('234.32')).toBeTruthy();
  });
  test('-1', async () => {
    expect(isCurrencyAmount('-1')).toBeTruthy();
  });
  test('900', async () => {
    expect(isCurrencyAmount('900')).toBeTruthy();
  });
  test('235.09', async () => {
    expect(isCurrencyAmount('235.09')).toBeTruthy();
  });
  test('12,345', async () => {
    expect(isCurrencyAmount('12,345')).toBeTruthy();
  });
  test('678.90', async () => {
    expect(isCurrencyAmount('678.90')).toBeTruthy();
  });
});
