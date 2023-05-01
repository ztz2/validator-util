import is12HourClock from '../src/lib/is-12-hour-clock';

describe('12小时制时间（hh:mm:ss）校验测试', () => {
  test('11:34:55', async () => {
    expect(is12HourClock('11:34:55')).toBeTruthy();
  });
  test('23:34:55', async () => {
    expect(is12HourClock('23:34:55')).toBeFalsy();
  });
});
