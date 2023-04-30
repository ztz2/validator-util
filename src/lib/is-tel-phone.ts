/**
 * @description 座机号码校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isTelPhone (value: string): boolean {
  const rex = /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/;
  return rex.test(value);
}
