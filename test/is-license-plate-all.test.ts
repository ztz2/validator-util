import isLicensePlateAll from '../src/lib/is-license-plate-all';

describe('车牌号校验(新能源+非新能源)测试', () => {
  test('京A12345D', async () => {
    expect(isLicensePlateAll('京A12345D')).toBeTruthy();
  });
  test('京A00599', async () => {
    expect(isLicensePlateAll('京A00599')).toBeTruthy();
  });
  test('京AD92035', async () => {
    expect(isLicensePlateAll('京AD92035')).toBeTruthy();
  });
  test('甘G23459F', async () => {
    expect(isLicensePlateAll('甘G23459F')).toBeTruthy();
  });
  test('京AA92035', async () => {
    expect(isLicensePlateAll('京AA92035')).toBeTruthy();
  });
  test('宁AD1234555555', async () => {
    expect(isLicensePlateAll('宁AD1234555555')).toBeFalsy();
  });
  test('浙苏H6F681', async () => {
    expect(isLicensePlateAll('浙苏H6F681')).toBeFalsy();
  });
});
