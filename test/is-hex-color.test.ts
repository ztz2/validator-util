import isHexColor from '../src/lib/is-hex-color';

describe('十六进制颜色校验测试', () => {
  test('#f00', async () => {
    expect(isHexColor('#f00')).toBeTruthy();
  });
  test('#F90', async () => {
    expect(isHexColor('#F90')).toBeTruthy();
  });
  test('#000', async () => {
    expect(isHexColor('#000')).toBeTruthy();
  });
  test('#fe9de8', async () => {
    expect(isHexColor('#fe9de8')).toBeTruthy();
  });
  test('#f8f8f8ff', async () => {
    expect(isHexColor('#f8f8f8ff')).toBeTruthy();
  });
  test('#f003', async () => {
    expect(isHexColor('#f003')).toBeTruthy();
  });
});
