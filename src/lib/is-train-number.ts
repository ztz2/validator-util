/**
 * @description 火车车次校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isTrainNumber (value: string): boolean {
  const rex = /^[GCDZTSPKXLY1-9]\d{1,4}$/;
  return rex.test(value);
}
