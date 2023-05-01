/**
 * @description 银行卡号校验（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isBankCardNumber (value: string): boolean {
  const rex = /^[1-9]\d{9,29}$/;
  return rex.test(value);
}
