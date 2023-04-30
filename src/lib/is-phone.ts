import isMobilePhone from './is-mobile-phone';
import isTelPhone from './is-tel-phone';

/**
 * @description 手机号码和座机号码的联合校验
 * @param {string} value 验证参数
 * @param {Object=} options 可选项
 * @param {boolean=} options.exact 是否启用严谨校验，默认false，严谨校验根据工信部2019年最新公布的手机号段; 非严谨校验只要是13,14,15,16,17,18,19开头即可
 * @return {boolean}
 */
export default function isPhone (value: string, options?: { exact?: boolean }): boolean {
  return isMobilePhone(value, options) || isTelPhone(value);
}
