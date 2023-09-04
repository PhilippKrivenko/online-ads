export default {
  getItem: (key: string): any => {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    throw new Error(`Ключ ${key} local storage не найден`);
  },

  setItem: (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
