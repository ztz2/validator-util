/**
 * @description 十六进制颜色校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isHexColor (value: string): boolean {
  const rex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3}|[a-fA-F0-9]{8}|[a-fA-F0-9]{4})$/;
  return rex.test(value);
}
