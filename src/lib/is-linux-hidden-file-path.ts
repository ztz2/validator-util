/**
 * @description linux"隐藏文件"路径校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isLinuxHiddenFilePath (value: string): boolean {
  const rex = /^\/(?:[^/]+\/)*\.[^/]*/;
  return rex.test(value);
}
