import isLinuxHiddenFilePath from '../src/lib/is-linux-hidden-file-path';

describe('linux"隐藏文件"路径校验测试', () => {
  test('/usr/ad/.dd', async () => {
    expect(isLinuxHiddenFilePath('/usr/ad/.dd')).toBeTruthy();
  });
  test('/root/.gitignore', async () => {
    expect(isLinuxHiddenFilePath('/root/.gitignore')).toBeTruthy();
  });
  test('/.gitignore', async () => {
    expect(isLinuxHiddenFilePath('/.gitignore')).toBeTruthy();
  });
});
