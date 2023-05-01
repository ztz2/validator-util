import isSubnetMask from '../src/lib/is-subnet-mask';

describe('子网掩码校验测试', () => {
  test('255.255.255.0', async () => {
    expect(isSubnetMask('255.255.255.0')).toBeTruthy();
  });
  test('255.255.255.255', async () => {
    expect(isSubnetMask('255.255.255.255')).toBeTruthy();
  });
  test('255.240.0.0', async () => {
    expect(isSubnetMask('255.240.0.0')).toBeTruthy();
  });
});
