import isWindowDirPath from '../src/lib/is-window-dir-path';

describe('window"文件夹"路径测试', () => {
  test('C:\\Users\\Administrator\\Desktop', async () => {
    expect(isWindowDirPath('C:\\Users\\Administrator\\Desktop')).toBeTruthy();
  });
});
