export const saveLocalStorageData = (searchInputValue: string) => {
  localStorage.setItem('savedInputValue', searchInputValue)
}

export const getLocalStorageData = () => {
  if (typeof window === 'undefined') return ''
  return localStorage.getItem('savedInputValue')
}

export const clearLocalStorage = () => {
  localStorage.clear()
}
