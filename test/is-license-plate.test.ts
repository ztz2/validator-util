import isLicensePlate from '../src/lib/is-license-plate';

describe('车牌号校验(非新能源)测试', () => {
  test('京A00599', async () => {
    expect(isLicensePlate('京A00599')).toBeTruthy();
  });
  test('黑D23908', async () => {
    expect(isLicensePlate('黑D23908')).toBeTruthy();
  });
});
