/**
 * @description base64格式校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isBase64 (value: string): boolean {
  const rex = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;
  return rex.test(value);
}
