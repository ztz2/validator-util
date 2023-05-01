/**
 * @description 数字/货币金额校验（支持负数、千分位分隔符）
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isCurrencyAmount (value: string): boolean {
  const rex = /^-?\d{1,3}(,\d{3})*(\.\d{1,2})?$/;
  return rex.test(value);
}
