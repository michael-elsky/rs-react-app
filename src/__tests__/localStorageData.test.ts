import { beforeEach, describe, expect, it } from 'vitest';
import {
  clearLocalStorage,
  getLocalStorageData,
  saveLocalStorageData,
} from '../utils/localStorageData';

describe('localStorageData', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('saves data to localStorage', () => {
    const text = 'A new';

    saveLocalStorageData(text);

    const data = localStorage.getItem('savedInputValue');

    expect(data).toBe(text);
  });

  it('gets data from localStorage', () => {
    const text = 'A new';

    localStorage.setItem('savedInputValue', text);

    const data = getLocalStorageData();

    expect(data).toBe(text);
  });

  it('clears localStorage', () => {
    const text = 'A new';

    localStorage.setItem('savedInputValue', text);

    clearLocalStorage();

    expect(localStorage.length).toBe(0);
  });
});
