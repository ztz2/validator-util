/**
 * @description 邮箱校验(兼容中文邮箱校验)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isEmail (value: string): boolean {
  const rex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (/[\u4e00-\u9fa5]/.test(value)) {
    const rex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return rex.test(value);
  }
  return rex.test(value);
}
