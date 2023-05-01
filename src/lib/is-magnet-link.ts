/**
 * @description 磁力链接校验(宽松匹配)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isMagnetLink (value: string): boolean {
  const rex = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/;
  return rex.test(value);
}
