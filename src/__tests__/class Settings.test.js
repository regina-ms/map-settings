import Settings from '../class Settings';

test('should create new Settings', () => {
  const my = new Settings();
  expect(my).toBeInstanceOf(Settings);
});

test('should set settings in personalSettingsMap', () => {
  const my = new Settings();
  my.setPersonalSettings('theme', 'gray');
  expect(my.personalSettingsMap).toEqual(new Map([['theme', 'gray']]));
});

test('shouldnt set settings if its not in variants', () => {
  const my = new Settings();
  my.setPersonalSettings('theme', 'blue');
  expect(my.personalSettingsMap.size).toBe(0);
});

test('should return map of settings', () => {
  const my = new Settings();
  my.setPersonalSettings('theme', 'gray');
  my.setPersonalSettings('music', 'off');
  expect(my.settings()).toEqual(new Map([['theme', 'gray'], ['music', 'off'], ['difficulty', 'easy']]));
});
