/**
 * @description 日期校验
 * @param {string} value 验证参数
 * @param {Object=} options 可选项
 * @param {boolean=} options.exact 是否启用严谨校验，默认true，严谨校验: 支持闰年判断。非严谨，这种日期都能通过: 1-1-1, 0000-1-1
 * @return {boolean}
 */
export default function isDate (value: string, options?: { exact?: boolean }): boolean {
  const rex = /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)$/;
  // 非严谨模式
  if (options?.exact === false) {
    const rex = /^\d{1,4}(-)(1[0-2]|0?[1-9])\1(0?[1-9]|[1-2]\d|30|31)$/;
    return rex.test(value);
  }
  return rex.test(value);
}
