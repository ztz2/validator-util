import isHtmlTag from '../src/lib/is-html-tag';

describe('html标签校验测试', () => {
  test('<div id="app"> 2333 </div>', async () => {
    expect(isHtmlTag('<div id="app"> 2333 </div>')).toBeTruthy();
  });
  test('<input type="text">', async () => {
    expect(isHtmlTag('<input type="text">')).toBeTruthy();
  });
  test('<br>', async () => {
    expect(isHtmlTag('<br>')).toBeTruthy();
  });
});
