/**
 * @description 视频链接地址校验
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isVideoLink (value: string): boolean {
  const rex = /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i;
  return rex.test(value);
}
