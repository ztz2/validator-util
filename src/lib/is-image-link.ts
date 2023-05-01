/**
 * @description 图片链接地址校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isImageLink (value: string): boolean {
  const rex = /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i;
  return rex.test(value);
}
