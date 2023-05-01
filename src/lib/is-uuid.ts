/**
 * @description UUID(GUID)校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isUUID (value: string): boolean {
  const rex = /^[a-f\d]{4}(?:[a-f\d]{4}-){4}[a-f\d]{12}$/i;
  return rex.test(value);
}
