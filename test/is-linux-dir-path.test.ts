import isLinuxDirPath from '../src/lib/is-linux-dir-path';

describe('linux文件夹路径校验测试', () => {
  test('/usr/ad/dd/', async () => {
    expect(isLinuxDirPath('/usr/ad/dd/')).toBeTruthy();
  });
  test('/', async () => {
    expect(isLinuxDirPath('/')).toBeTruthy();
  });
  test('/root/', async () => {
    expect(isLinuxDirPath('/root/')).toBeTruthy();
  });
  test('/ a a / a / a a /', async () => {
    expect(isLinuxDirPath('/ a a / a / a a /')).toBeTruthy();
  });
});
