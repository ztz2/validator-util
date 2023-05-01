/**
 * @description 24小时制时间（HH:mm:ss）校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function is24HourClock (value: string): boolean {
  const rex = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  return rex.test(value);
}
