/**
 * @description 12小时制时间（hh:mm:ss）校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function is12HourClock (value: string): boolean {
  const rex = /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/;
  return rex.test(value);
}
