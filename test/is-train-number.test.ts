import isTrainNumber from '../src/lib/is-train-number';

describe('火车车次校验测试', () => {
  test('G1868', async () => {
    expect(isTrainNumber('G1868')).toBeTruthy();
  });
  test('D102', async () => {
    expect(isTrainNumber('D102')).toBeTruthy();
  });
  test('D9', async () => {
    expect(isTrainNumber('D9')).toBeTruthy();
  });
  test('Z5', async () => {
    expect(isTrainNumber('Z5')).toBeTruthy();
  });
  test('Z24', async () => {
    expect(isTrainNumber('Z24')).toBeTruthy();
  });
  test('Z17', async () => {
    expect(isTrainNumber('Z17')).toBeTruthy();
  });
});
