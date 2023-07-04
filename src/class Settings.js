export default class Settings {
  constructor() {
    this.defSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.variants = {
      theme: ['light', 'gray'],
      music: ['pop', 'rock', 'chillout', 'off'],
      difficulty: ['normal', 'hard', 'nightmare'],
    };

    this.personalSettingsMap = new Map();
  }

  setPersonalSettings(name, value) {
    if (this.variants[name].includes(value)) {
      this.personalSettingsMap.set(name, value);
    }
  }

  settings() {
    const newSettings = new Map();
    this.defSettings.forEach((value, key) => {
      newSettings.set(key, value);
    });

    this.personalSettingsMap.forEach((value, key) => {
      newSettings.set(key, value);
    });
    return newSettings;
  }
}
