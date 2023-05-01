/**
 * @description linux文件路径校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isLinuxFilePath (value: string): boolean {
  const rex = /^\/(?:[^/]+\/)*[^/]+$/;
  return rex.test(value);
}
