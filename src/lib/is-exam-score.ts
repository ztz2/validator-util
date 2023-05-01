/**
 * @description 考卷分数校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isExamScore (value: string): boolean {
  const rex = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:\.5)?$/;
  return rex.test(value);
}
