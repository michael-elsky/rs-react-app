import { useEffect, useState } from 'react';

const useLocalStorage = (key: string = 'savedInputValue') => {
  const [value, setValue] = useState(() => localStorage.getItem(key) || '');

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return {
    initialSearchValue: value,
    setLocalStorageValue: setValue,
  };
};

export default useLocalStorage;
