/**
 * @description window下"文件"路径校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isWindowFilePath (value: string): boolean {
  const rex = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/;
  return rex.test(value);
}
