/**
 * @description window"文件夹"路径校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isWindowDirPath (value: string): boolean {
  const rex = /^[a-zA-Z]:\\(?:\w+\\?)*$/;
  return rex.test(value);
}
