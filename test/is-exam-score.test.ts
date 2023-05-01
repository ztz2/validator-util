import isExamScore from '../src/lib/is-exam-score';

describe('考卷分数校验测试', () => {
  test('150', async () => {
    expect(isExamScore('150')).toBeTruthy();
  });
  test('100.5', async () => {
    expect(isExamScore('100.5')).toBeTruthy();
  });
});
