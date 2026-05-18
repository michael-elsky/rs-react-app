import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import useLocalStorage from '../hooks/useLocalStorage';
import { act } from 'react';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should return value from localStorage', () => {
    const key = 'key';
    const value = 'hello';

    localStorage.setItem(key, value);

    const { result } = renderHook(() => useLocalStorage(key));

    expect(result.current.initialSearchValue).toBe(value);
  });

  it('setValue update localsTorage', () => {
    const key = 'key';
    const value = 'hello';

    const { result } = renderHook(() => useLocalStorage(key));

    act(() => {
      result.current.setLocalStorageValue(value);
    });

    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should return empty string if no localStorage value', () => {
    const key = 'key';

    const { result } = renderHook(() => useLocalStorage(key));

    expect(result.current.initialSearchValue).toBe('');
  });
});
