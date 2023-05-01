/**
 * @description 子网掩码校验(不包含 0.0.0.0)
 * @param {string} value 验证参数
 * @return {boolean}
 */
export default function isSubnetMask (value: string): boolean {
  const rex = /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/;
  return rex.test(value);
}
