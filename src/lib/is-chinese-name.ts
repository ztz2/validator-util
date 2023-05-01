/**
 * @description 中文姓名校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isChineseName (value: string): boolean {
  const rex = /^(?:[\u4e00-\u9fa5·]{2,16})$/;
  return rex.test(value);
}
