/**
 * @description 校验法人和其他组织统一社会信用代码的合法性
 * @param {string} value 验证参数
 * @param {Object=} options 可选项
 * @param {boolean=} options.exact 是否启用严谨校验，默认true，非严谨校验使用正则，严谨校验进行计算，计算规则参考“中国国家标准化管理委员会” [GB 32100-2015 法人和其他组织统一社会信用代码编码规则](http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=24691C25985C1073D3A7C85629378AC0)
 * @return {boolean}
 */
export default function isUSCI (value: string, options?: { exact?: boolean }): boolean {
  // 非严谨模式
  if (options?.exact !== true) {
    const rex = /^(([0-9A-Za-z]{15})|([0-9A-Za-z]{18})|([0-9A-Za-z]{20}))$/;
    return rex.test(value);
  }

  // 代码字符对应的值
  const valueMap: { [propName: string]: number } = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
    'G': 16,
    'H': 17,
    'J': 18,
    'K': 19,
    'L': 20,
    'M': 21,
    'N': 22,
    'P': 23,
    'Q': 24,
    'R': 25,
    'T': 26,
    'U': 27,
    'W': 28,
    'X': 29,
    'Y': 30
  }
  const usciStr = value.toUpperCase();
  const reg = /^[A-Z0-9]{18}$/;
  if (!reg.test(usciStr)) {
    return false
  }
  let weight = 0;
  let sum = 0;
  let index = 0;
  let c;
  let v;
  const usciStrRange = usciStr.slice(0, 17);
  for (index = 0; index < usciStrRange.length; index++) {
    c = usciStrRange.charAt(index);
    v = valueMap[c];
    // 计算加权因子
    weight = Number.parseInt(String(Math.pow(3, index))) % 31;
    sum += v * weight;
  }
  const mod = sum % 31;
  let sign = 31 - mod;
  if (sign == 31) {
    sign = 0;
  }
  let signChar = '';
  for (const key in valueMap) {
    signChar = key;
    if (valueMap[key] === sign) {
      break;
    }
  }
  return signChar === usciStr.slice(17, 18);
}
