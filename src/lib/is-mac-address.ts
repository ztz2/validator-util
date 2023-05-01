/**
 * @description MAC地址校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isMacAddress (value: string): boolean {
  const rex = /^(([a-f0-9][0,2,4,6,8,a,c,e]:([a-f0-9]{2}:){4})|([a-f0-9][0,2,4,6,8,a,c,e]-([a-f0-9]{2}-){4}))[a-f0-9]{2}$/i;
  return rex.test(value);
}
