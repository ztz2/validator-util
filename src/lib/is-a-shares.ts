/**
 * @description 股票代码(A股)校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isAShares (value: string): boolean {
  const rex = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/;
  return rex.test(value);
}
