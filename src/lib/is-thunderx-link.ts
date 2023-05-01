/**
 * @description 迅雷链接校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isThunderxLink (value: string): boolean {
  const rex = /^thunderx?:\/\/[a-zA-Z\d]+=$/;
  return rex.test(value);
}
