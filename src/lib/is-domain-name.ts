/**
 * @description 域名校验(非网址, 不包含协议)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isDomainName (value: string): boolean {
  const rex = /^([0-9a-zA-Z-]{1,}\.)+([a-zA-Z]{2,})$/;
  return rex.test(value);
}
