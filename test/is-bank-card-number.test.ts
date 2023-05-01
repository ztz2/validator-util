import isBankCardNumber from '../src/lib/is-bank-card-number';

describe('银行卡号校验测试', () => {
  test('6234567890', async () => {
    expect(isBankCardNumber('6234567890')).toBeTruthy();
  });
  test('6222026006705354000', async () => {
    expect(isBankCardNumber('6222026006705354000')).toBeTruthy();
  });
});
