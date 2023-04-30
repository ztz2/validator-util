/**
 * @description 校验手机号码
 * @param {string} value 验证参数
 * @param {Object=} options 可选项
 * @param {boolean=} options.exact 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可
 * @return {boolean}
 */
export default function isMobilePhone (value: string, options?: { exact?: boolean }): boolean {
  const rex = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/;

  if (options?.exact !== true) {
    const rex = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    return rex.test(value);
  }

  return rex.test(value);
}
