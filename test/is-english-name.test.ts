import isEnglishName from '../src/lib/is-english-name';

describe('英文姓名校验测试', () => {
  test('James', async () => {
    expect(isEnglishName('James')).toBeTruthy();
  });
  test('Kevin Wayne Durant', async () => {
    expect(isEnglishName('Kevin Wayne Durant')).toBeTruthy();
  });
  test('Dirk Nowitzki', async () => {
    expect(isEnglishName('Dirk Nowitzki')).toBeTruthy();
  });
});
