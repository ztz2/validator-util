/**
 * @description 网址校验(必须带端口号的网址或IP)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isUrlWithPort (value: string): boolean {
  const rex = /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/;
  return rex.test(value);
}
