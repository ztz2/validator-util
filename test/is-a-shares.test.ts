import isAShares from '../src/lib/is-a-shares';

describe('股票代码(A股)校验测试', () => {
  test('sz000858', async () => {
    expect(isAShares('sz000858')).toBeTruthy();
  });
  test('SZ002136', async () => {
    expect(isAShares('SZ002136')).toBeTruthy();
  });
  test('sz300675', async () => {
    expect(isAShares('sz300675')).toBeTruthy();
  });
  test('SH600600', async () => {
    expect(isAShares('SH600600')).toBeTruthy();
  });
  test('sh601155', async () => {
    expect(isAShares('sh601155')).toBeTruthy();
  });
});
