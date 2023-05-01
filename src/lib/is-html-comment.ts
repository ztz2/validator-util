/**
 * @description html注释校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isHtmlComment (value: string): boolean {
  const rex = /<!--[\s\S]*?-->/g;
  return rex.test(value);
}
