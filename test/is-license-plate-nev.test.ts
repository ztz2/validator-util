import isLicensePlateNev from '../src/lib/is-license-plate-nev';

describe('车牌号校验(新能源)测试', () => {
  test('京AD92035', async () => {
    expect(isLicensePlateNev('京AD92035')).toBeTruthy();
  });
  test('甘G23459F', async () => {
    expect(isLicensePlateNev('甘G23459F')).toBeTruthy();
  });
  test('京AA92035', async () => {
    expect(isLicensePlateNev('京AA92035')).toBeTruthy();
  });
});
