import isMd5 from '../src/lib/is-md5';

describe('md5格式校验(32位)测试', () => {
  test('21fe181c5bfc16306a6828c1f7b762e8', async () => {
    expect(isMd5('21fe181c5bfc16306a6828c1f7b762e8')).toBeTruthy();
  });
});
