/**
 * @description 版本号校验(X.Y.Z格式)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isVersion (value: string): boolean {
  const rex = /^\d+(?:\.\d+){2}$/;
  return rex.test(value);
}
