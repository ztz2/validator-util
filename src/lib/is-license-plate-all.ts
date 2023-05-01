/**
 * @description 车牌号校验(新能源+非新能源)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isLicensePlateAll (value: string): boolean {
  const rex = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/;
  return rex.test(value);
}
