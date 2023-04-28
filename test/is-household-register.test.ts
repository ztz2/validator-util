import isHouseholdRegister from '../src/lib/is-household-register';

describe('户口簿测试', () => {
  test('441421999707223115', async () => {
    expect(isHouseholdRegister('441421999707223115')).toBeTruthy();
  });
});
