import is24HourClock from '../src/lib/is-24-hour-clock';

describe('24小时制时间（HH:mm:ss）校验测试', () => {
  test('23:34:55', async () => {
    expect(is24HourClock('23:34:55')).toBeTruthy();
  });
  test('00:00:00', async () => {
    expect(is24HourClock('00:00:00')).toBeTruthy();
  });
});
