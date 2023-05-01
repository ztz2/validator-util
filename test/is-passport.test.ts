import isPassport from '../src/lib/is-passport';

describe('护照校验测试', () => {
  test('s28233515', async () => {
    expect(isPassport('s28233515')).toBeTruthy();
  });
  test('141234567', async () => {
    expect(isPassport('141234567')).toBeTruthy();
  });
  test('159203084', async () => {
    expect(isPassport('159203084')).toBeTruthy();
  });
  test('MA1234567', async () => {
    expect(isPassport('MA1234567')).toBeTruthy();
  });
  test('K25345719', async () => {
    expect(isPassport('K25345719')).toBeTruthy();
  });
});
