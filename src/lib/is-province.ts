/**
 * @description 中国省份校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isProvince (value: string): boolean {
  const rex = /^浙江|上海|北京|天津|重庆|黑龙江|吉林|辽宁|内蒙古|河北|新疆|甘肃|青海|陕西|宁夏|河南|山东|山西|安徽|湖北|湖南|江苏|四川|贵州|云南|广西|西藏|江西|广东|福建|台湾|海南|香港|澳门$/;
  return rex.test(value);
}
