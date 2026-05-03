export const saveLocalStorageData = (searchInputValue: string) => {
  localStorage.setItem('savedInputValue', searchInputValue);
};

export const getLocalStorageData = () => {
  return localStorage.getItem('savedInputValue');
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
