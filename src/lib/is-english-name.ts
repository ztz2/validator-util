/**
 * @description 英文姓名校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isEnglishName (value: string): boolean {
  const rex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
  return rex.test(value);
}
