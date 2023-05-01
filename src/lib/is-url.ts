/**
 * @description 网址校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isURL (value: string): boolean {
  const rex = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/;
  return rex.test(value);
}
