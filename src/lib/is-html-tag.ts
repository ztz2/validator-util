/**
 * @description html标签校验(宽松匹配)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isHtmlTag (value: string): boolean {
  const rex = /<(\w+)[^>]*>(.*?<\/\1>)?/;
  return rex.test(value);
}
