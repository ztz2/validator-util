/**
 * @description ed2k链接校验(宽松匹配)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isEd2kLink (value: string): boolean {
  const rex = /^ed2k:\/\/\|file\|.+\|\/$/;
  return rex.test(value);
}
