import isHtmlComment from '../src/lib/is-html-comment';

describe('html注释校验测试', () => {
  test('<!--<div class="_bubble"></div>--><div>chenguzhen87</div><div class="_bubble"></div>-->', async () => {
    expect(isHtmlComment('<!--<div class="_bubble"></div>--><div>chenguzhen87</div><div class="_bubble"></div>-->')).toBeTruthy();
  });
});
