/**
 * @description 手机机身码(IMEI)校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isIMEI (value: string): boolean {
  const rex = /^\d{15,17}$/;
  return rex.test(value);
}
