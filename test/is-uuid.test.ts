import isUUID from '../src/lib/is-uuid';

describe('UUID(GUID)校验测试', () => {
  test('e155518c-ca1b-443c-9be9-fe90fdab7345', async () => {
    expect(isUUID('e155518c-ca1b-443c-9be9-fe90fdab7345')).toBeTruthy();
  });
  test('41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D', async () => {
    expect(isUUID('41E3DAF5-6E37-4BCC-9F8E-0D9521E2AA8D')).toBeTruthy();
  });
  test('00000000-0000-0000-0000-000000000000', async () => {
    expect(isUUID('00000000-0000-0000-0000-000000000000')).toBeTruthy();
  });
});
