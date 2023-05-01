/**
 * @description md5格式校验(32位)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isMd5 (value: string): boolean {
  const rex = /^[a-fA-F0-9]{32}$/;
  return rex.test(value);
}
