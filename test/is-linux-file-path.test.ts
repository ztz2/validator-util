import isLinuxFilePath from '../src/lib/is-linux-file-path';

describe('linux文件路径校验测试', () => {
  test('/root/b.ts', async () => {
    expect(isLinuxFilePath('/root/b.ts')).toBeTruthy();
  });
  test('/root/abc', async () => {
    expect(isLinuxFilePath('/root/abc')).toBeTruthy();
  });
});
