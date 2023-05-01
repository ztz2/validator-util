import isDate from '../src/lib/is-date';

describe('日期校验测试', () => {
  test('1990-12-12', async () => {
    expect(isDate('1990-12-12', { exact: false })).toBeTruthy();
  });
  test('1-1-1', async () => {
    expect(isDate('1-1-1', { exact: false })).toBeTruthy();
  });
  test('0000-1-1', async () => {
    expect(isDate('0000-1-1', { exact: false })).toBeTruthy();
  });
  test('2020-00-01', async () => {
    expect(isDate('2020-00-01', { exact: false })).toBeFalsy();
  });

  test('1990-12-12', async () => {
    expect(isDate('1990-12-12')).toBeTruthy();
  });
  test('2000-02-29', async () => {
    expect(isDate('2000-02-29')).toBeTruthy();
  });
  test('2021-02-29', async () => {
    expect(isDate('2021-02-29')).toBeFalsy();
  });
});
