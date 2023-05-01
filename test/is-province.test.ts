import isProvince from '../src/lib/is-province';

describe('中国省份校验测试', () => {
  test('浙江', async () => {
    expect(isProvince('浙江')).toBeTruthy();
  });
  test('台湾', async () => {
    expect(isProvince('台湾')).toBeTruthy();
  });
  test('哈尔滨', async () => {
    expect(isProvince('哈尔滨')).toBeFalsy();
  });
});
