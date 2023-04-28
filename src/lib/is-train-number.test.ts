import isTrainNumber from './is-train-number';

describe('火车车次校验测试', () => {
  test('简单字符测试', async () => {
    expect(isTrainNumber('G1868')).toBeTruthy();
    expect(isTrainNumber('D102')).toBeTruthy();
    expect(isTrainNumber('D9')).toBeTruthy();
    expect(isTrainNumber('Z5')).toBeTruthy();
    expect(isTrainNumber('Z24')).toBeTruthy();
    expect(isTrainNumber('Z17')).toBeTruthy();
  });
});
