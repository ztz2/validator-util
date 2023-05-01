import isChineseName from '../src/lib/is-chinese-name';

describe('中文姓名校验测试', () => {
  test('张三', async () => {
    expect(isChineseName('张三')).toBeTruthy();
  });
  test('李四', async () => {
    expect(isChineseName('李四')).toBeTruthy();
  });
  test('王五', async () => {
    expect(isChineseName('王五')).toBeTruthy();
  });
  test('葛二蛋', async () => {
    expect(isChineseName('葛二蛋')).toBeTruthy();
  });
  test('凯文·杜兰特', async () => {
    expect(isChineseName('凯文·杜兰特')).toBeTruthy();
  });
  test('德克·维尔纳·诺维茨基', async () => {
    expect(isChineseName('德克·维尔纳·诺维茨基')).toBeTruthy();
  });
});
