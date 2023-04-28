/**
 * @description 校验身份证，支持一代身份证、二代身份证
 * @param {string} value 验证参数
 * @param {Object=} options 可选项
 * @param {boolean=} options.exact 是否启用严格模式，默认true，非严格模式使用正则，严格模式进行计算（计算规则参考“中国国家标准化管理委员会”官方文档：http://www.gb688.cn/bzgk/gb/newGbInfo?hcno=080D6FBF2BB468F9007657F26D60013E）
 * @return {boolean}
 */
export default function isID (value: string, options?: { exact?: boolean }): boolean {
  // 非严格模式
  if (options?.exact === false) {
    const rex = /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/;
    return rex.test(value);
  }

  // a1与对应的校验码对照表，其中key表示a1，value表示校验码，value中的10表示校验码X
  const a1Map: { [propName: string]: number } = {
    0: 1,
    1: 0,
    2: 10,
    3: 9,
    4: 8,
    5: 7,
    6: 6,
    7: 5,
    8: 4,
    9: 3,
    10: 2
  };
  const idStr = value.toUpperCase();
  const reg = /^[0-9]{17}[0-9X]$/;
  if (!reg.test(idStr)) {
    return false;
  }
  let sum = 0;
  let signChar = '';
  for (let index = 0; index < idStr.length; index++) {
    const i = 18 - index;
    const c = idStr.charAt(index);
    let v;
    let weight;
    if (i != 1) {
      v = parseInt(c)
      if (!isNaN(v)) {
        // 计算加权因子
        weight = parseInt(String(Math.pow(2, parseFloat(String(i - 1))))) % 11;
        sum += (v * weight);
      } else {
        return false;
      }
    } else {
      signChar = c.toString();
    }
  }
  const a1 = a1Map[sum % 11];
  let a1Str = a1.toString();
  if (a1 == 10) {
    a1Str = 'X';
  }
  return a1Str === signChar;
}
