/**
 * @description 护照校验(包含香港、澳门)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isPassport (value: string): boolean {
  const rex = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;
  return rex.test(value);
}
