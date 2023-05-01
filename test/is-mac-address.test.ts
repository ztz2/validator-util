import isMacAddress from '../src/lib/is-mac-address';

describe('MAC地址校验测试', () => {
  test('38:f9:d3:4b:f5:51', async () => {
    expect(isMacAddress('38:f9:d3:4b:f5:51')).toBeTruthy();
  });
  test('00-0C-29-CA-E4-66', async () => {
    expect(isMacAddress('00-0C-29-CA-E4-66')).toBeTruthy();
  });
});
