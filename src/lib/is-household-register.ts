/**
 * @description 户口薄校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isHouseholdRegister (value: string): boolean {
  const rex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return rex.test(value);
}
