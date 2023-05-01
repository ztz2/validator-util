import isWindowFilePath from '../src/lib/is-window-file-path';

describe('window下"文件"路径测试', () => {
  test('C:\\Users\\Administrator\\Desktop\\qq.link', async () => {
    expect(isWindowFilePath('C:\\Users\\Administrator\\Desktop\\qq.link')).toBeTruthy();
  });
  test('e:\\m\\vscode.exe', async () => {
    expect(isWindowFilePath('e:\\m\\vscode.exe')).toBeTruthy();
  });
});
